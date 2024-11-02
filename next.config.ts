import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
    webpack: (config, options) => {
        if (!options.dev) {
          config.devtool = options.isServer ? false : 'your-custom-devtool'
        }
        return config
      },
}
 
export default nextConfig