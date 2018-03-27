import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

import config from './dev';

config.output.file = 'build/bundle.min.js';
config.output.sourcemap = false;
config.plugins[3].sourceMap = false;
config.plugins[4] = replace({
    'process.env.NODE_ENV': JSON.stringify('production')
});
config.plugins.push(uglify({
    compress: {
        warnings: false
    },
    output: {
        comments: false,
    },
    sourceMap: false,
}));

export default config;
