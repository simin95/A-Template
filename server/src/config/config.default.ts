import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';
import * as path from 'path';

export default (appInfo: MidwayAppInfo) => {
  return {
    view: {
      defaultViewEngine: 'nunjucks',
      root: path.join(appInfo.appDir, 'src/view'),
      mapping: {
        '.html': 'nunjucks'
      },
    },
    assets: {
      publicPath: 'public',
    },


    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1657785167720_7271',
    egg: {
      port: 7001,
    },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
