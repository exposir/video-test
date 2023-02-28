// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/menglingyu/My/video-test/node_modules/.pnpm/@umijs+runtime@3.5.37_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.tsx').default,
    "routes": [
      {
        "path": "/about",
        "exact": true,
        "component": require('@/pages/about.tsx').default
      },
      {
        "path": "/album/:id",
        "exact": true,
        "component": require('@/pages/album/[id].tsx').default
      },
      {
        "path": "/download",
        "exact": true,
        "component": require('@/pages/download.tsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.tsx').default
      },
      {
        "path": "/star",
        "exact": true,
        "component": require('@/pages/star.tsx').default
      },
      {
        "path": "/video",
        "exact": true,
        "component": require('@/pages/video.tsx').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
