import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Herbalist',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      LaunchShowDuration: 3000,
      showSpinner: false,
      androidSpinnerStyle: 'medium',
      iosSpinnerStyle: 'small',
      SplashScreen: true,
      SplashImmersive: true,
    }
  }
};


export default config;
