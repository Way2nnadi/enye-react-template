import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'app/index.js',
    output: {
        file: 'build/bundle.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        resolve({
            module: true,
            jsnext: true,
            main: true,
            customResolveOptions: {
                moduleDirectory: 'node_modules',
            },
        }),
        postcss({
            plugins: [],
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        cjs({
            include: [
                'node_modules/**',
            ],
            namedExports: {
                'node_modules/react/index.js': ['Component', 'createElement', 'Children'],
                'node_modules/react-dom/index.js': ['createPortal', 'findDOMNode'],
            }
        }),
        replace({
             exclude: 'node_modules/**',
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        globals(),
        json(),
        livereload(),
    ],
};
