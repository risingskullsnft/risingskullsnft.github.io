<template>
  <div>
    <vue-p5 @preload="preload" @setup="setup" @draw="draw"> </vue-p5>
  </div>
</template>

<script>
// import Vue from "vue";
import VueP5 from "vue-p5";

class Glitch {
  constructor(sketch, img) {
    this.sketch = sketch;
    this.channelLen = 4;
    this.imgOrigin = img;
    this.imgOrigin.loadPixels();
    this.copyData = [];
    this.flowLineImgs = [];
    this.shiftLineImgs = [];
    this.shiftRGBs = [];
    this.scatImgs = [];
    this.throughFlag = true;
    this.copyData = new Uint8ClampedArray(this.imgOrigin.pixels);

    // flow line
    for (let i = 0; i < 1; i++) {
      let o = {
        pixels: null,
        t1: this.sketch.floor(this.sketch.random(0, 1000)),
        speed: this.sketch.floor(this.sketch.random(4, 24)),
        randX: this.sketch.floor(this.sketch.random(24, 80)),
      };
      this.flowLineImgs.push(o);
    }

    // shift line
    for (let i = 0; i < 6; i++) {
      let o = null;
      this.shiftLineImgs.push(o);
    }

    // shift RGB
    for (let i = 0; i < 1; i++) {
      let o = null;
      this.shiftRGBs.push(o);
    }

    // scat imgs
    for (let i = 0; i < 3; i++) {
      let scatImg = {
        img: null,
        x: 0,
        y: 0,
      };
      this.scatImgs.push(scatImg);
    }
  }

  replaceData(destImg, srcPixels) {
    for (let y = 0; y < destImg.height; y++) {
      for (let x = 0; x < destImg.width; x++) {
        let r, g, b, a;
        let index;
        index = (y * destImg.width + x) * this.channelLen;
        r = index;
        g = index + 1;
        b = index + 2;
        a = index + 3;
        destImg.pixels[r] = srcPixels[r];
        destImg.pixels[g] = srcPixels[g];
        destImg.pixels[b] = srcPixels[b];
        destImg.pixels[a] = srcPixels[a];
      }
    }
    destImg.updatePixels();
  }

  flowLine(srcImg, obj) {
    let destPixels, tempY;
    destPixels = new Uint8ClampedArray(srcImg.pixels);
    obj.t1 %= srcImg.height;
    obj.t1 += obj.speed;
    //tempY = floor(noise(obj.t1) * srcImg.height);
    tempY = this.sketch.floor(obj.t1);
    for (let y = 0; y < srcImg.height; y++) {
      if (tempY === y) {
        for (let x = 0; x < srcImg.width; x++) {
          let r, g, b, a;
          let index;
          index = (y * srcImg.width + x) * this.channelLen;
          r = index;
          g = index + 1;
          b = index + 2;
          a = index + 3;
          destPixels[r] = srcImg.pixels[r] + obj.randX;
          destPixels[g] = srcImg.pixels[g] + obj.randX;
          destPixels[b] = srcImg.pixels[b] + obj.randX;
          destPixels[a] = srcImg.pixels[a];
        }
      }
    }
    return destPixels;
  }

  shiftLine(srcImg) {
    let offsetX;
    let rangeMin, rangeMax;
    let destPixels;
    let rangeH;

    destPixels = new Uint8ClampedArray(srcImg.pixels);
    rangeH = srcImg.height;
    rangeMin = this.sketch.floor(this.sketch.random(0, rangeH));
    rangeMax =
      rangeMin + this.sketch.floor(this.sketch.random(1, rangeH - rangeMin));
    offsetX = this.channelLen * this.sketch.floor(this.sketch.random(-40, 40));

    for (let y = 0; y < srcImg.height; y++) {
      if (y > rangeMin && y < rangeMax) {
        for (let x = 0; x < srcImg.width; x++) {
          let r, g, b, a;
          let r2, g2, b2;
          // let r2, g2, b2, a2;
          let index;

          index = (y * srcImg.width + x) * this.channelLen;
          r = index;
          g = index + 1;
          b = index + 2;
          a = index + 3;
          r2 = r + offsetX;
          g2 = g + offsetX;
          b2 = b + offsetX;
          destPixels[r] = srcImg.pixels[r2];
          destPixels[g] = srcImg.pixels[g2];
          destPixels[b] = srcImg.pixels[b2];
          destPixels[a] = srcImg.pixels[a];
        }
      }
    }
    return destPixels;
  }

  shiftRGB(srcImg) {
    let randR, randG, randB;
    let destPixels;
    let range;

    range = 16;
    destPixels = new Uint8ClampedArray(srcImg.pixels);
    randR =
      (this.sketch.floor(this.sketch.random(-range, range)) * srcImg.width +
        this.sketch.floor(this.sketch.random(-range, range))) *
      this.channelLen;
    randG =
      (this.sketch.floor(this.sketch.random(-range, range)) * srcImg.width +
        this.sketch.floor(this.sketch.random(-range, range))) *
      this.channelLen;
    randB =
      (this.sketch.floor(this.sketch.random(-range, range)) * srcImg.width +
        this.sketch.floor(this.sketch.random(-range, range))) *
      this.channelLen;

    for (let y = 0; y < srcImg.height; y++) {
      for (let x = 0; x < srcImg.width; x++) {
        let r, g, b, a;
        let r2, g2, b2;
        // let r2, g2, b2, a2;
        let index;

        index = (y * srcImg.width + x) * this.channelLen;
        r = index;
        g = index + 1;
        b = index + 2;
        a = index + 3;
        r2 = (r + randR) % srcImg.pixels.length;
        g2 = (g + randG) % srcImg.pixels.length;
        b2 = (b + randB) % srcImg.pixels.length;
        destPixels[r] = srcImg.pixels[r2];
        destPixels[g] = srcImg.pixels[g2];
        destPixels[b] = srcImg.pixels[b2];
        destPixels[a] = srcImg.pixels[a];
      }
    }

    return destPixels;
  }

  getRandomRectImg(srcImg) {
    let startX;
    let startY;
    let rectW;
    let rectH;
    let destImg;
    startX = this.sketch.floor(this.sketch.random(0, srcImg.width - 30));
    startY = this.sketch.floor(this.sketch.random(0, srcImg.height - 50));
    rectW = this.sketch.floor(this.sketch.random(30, srcImg.width - startX));
    rectH = this.sketch.floor(this.sketch.random(1, 50));
    destImg = srcImg.get(startX, startY, rectW, rectH);
    destImg.loadPixels();
    return destImg;
  }

  show() {
    // restore the original state
    this.replaceData(this.imgOrigin, this.copyData);

    // sometimes pass without effect processing
    let n = this.sketch.floor(this.sketch.random(200));
    if (n > 75 && this.throughFlag) {
      this.throughFlag = false;
      setTimeout(() => {
        this.throughFlag = true;
      }, this.sketch.floor(this.sketch.random(40, 400)));
    }
    if (!this.throughFlag) {
      this.sketch.push();
      this.sketch.translate(
        (this.width - this.imgOrigin.width) / 2,
        (this.height - this.imgOrigin.height) / 2
      );
      this.sketch.image(this.imgOrigin, 0, 0);
      this.sketch.pop();
      return;
    }

    // flow line
    this.flowLineImgs.forEach((v, i, arr) => {
      arr[i].pixels = this.flowLine(this.imgOrigin, v);
      if (arr[i].pixels) {
        this.replaceData(this.imgOrigin, arr[i].pixels);
      }
    });

    // shift line
    this.shiftLineImgs.forEach((v, i, arr) => {
      if (this.sketch.floor(this.sketch.random(100)) > 50) {
        arr[i] = this.shiftLine(this.imgOrigin);
        this.replaceData(this.imgOrigin, arr[i]);
      } else {
        if (arr[i]) {
          this.replaceData(this.imgOrigin, arr[i]);
        }
      }
    });

    // shift rgb
    this.shiftRGBs.forEach((v, i, arr) => {
      if (this.sketch.floor(this.sketch.random(100)) > 65) {
        arr[i] = this.shiftRGB(this.imgOrigin);
        this.replaceData(this.imgOrigin, arr[i]);
      }
    });

    this.sketch.push();
    this.sketch.translate(
      (this.width - this.imgOrigin.width) / 2,
      (this.height - this.imgOrigin.height) / 2
    );
    this.sketch.image(this.imgOrigin, 0, 0);
    this.sketch.pop();

    // scat image
    this.scatImgs.forEach((obj) => {
      this.sketch.push();
      this.sketch.translate(
        (this.width - this.imgOrigin.width) / 2,
        (this.height - this.imgOrigin.height) / 2
      );
      if (this.sketch.floor(this.sketch.random(100)) > 80) {
        obj.x = this.sketch.floor(
          this.sketch.random(
            -this.imgOrigin.width * 0.3,
            this.imgOrigin.width * 0.7
          )
        );
        obj.y = this.sketch.floor(
          this.sketch.random(
            -this.imgOrigin.height * 0.1,
            this.imgOrigin.height
          )
        );
        obj.img = this.getRandomRectImg(this.imgOrigin);
      }
      if (obj.img) {
        this.sketch.image(obj.img, obj.x, obj.y);
      }
      this.sketch.pop();
    });
  }
}

export default {
  name: "p5-image-glitch",
  components: {
    "vue-p5": VueP5,
  },
  props: ["src"],
  data() {
    return {
      width: 400,
      height: 400,
      glitchImage: null,
      glitchObj: null,
      isLoaded: false,
    };
  },
  methods: {
    preload(sketch) {
      this.glitchImage = sketch.loadImage(this.src);
    },
    setup(sketch) {
      // sketch.background(0);
      sketch.createCanvas(this.width, this.height);
      this.glitchObj = new Glitch(sketch, this.glitchImage);
      this.isLoaded = true;
    },

    draw(sketch) {
      sketch.clear();
      // sketch.background(0);

      if (this.isLoaded) {
        this.glitchObj.show();
      }
      // fill(255, 255, 255);
      // textSize(14);
      // text('FPS: ' + floor(frameRate()), 20, 30);
    },
  },
};
</script>

<style scoped>
</style>