import { EggPlugin } from 'egg';
export default {
  // static: false,

  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  assets: {
    enable: true,
    package: 'egg-view-assets',
  }

  
} as EggPlugin;
