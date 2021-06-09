const { extendDefaultPlugins } = require('svgo');
const { override, fixBabelImports } = require('customize-cra');

const alter_config = () => (config, env) => {
    const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
    config.module.rules[oneOf_loc].oneOf = [    //例如要增加处理less的配置
        {
            test: /\.svg$/,
            use: [
                { loader: 'svg-sprite-loader', options: {} },
                {
                    loader: 'svgo-loader', options: {
                        // plugins: extendDefaultPlugins([
                        //     {
                        //         name: 'removeAttrs',
                        //         params: {
                        //             attrs: 'fill'
                        //         }
                        //     }
                        // ])
                    }
                }
            ]
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]

    return config;
}
module.exports = override(
    alter_config(),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
);