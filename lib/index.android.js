import { ToastAndroid } from 'react-native';

const { SHORT, LONG, BOTTOM, CENTER, TOP } = ToastAndroid;

function optionsBuilder() {
  // defaults
  let message = null;
  let duration = SHORT;
  let position = CENTER;
  let addPixelsY = 0;

  return {
    withMessage(m) {
      message = m;
      return this;
    },

    withDuration(d) {
      duration = d;
      return this;
    },

    withPosition(p) {
      position = p;
      return this;
    },

    withAddPixelsY(y) {
      addPixelsY = y;
      return this;
    },

    build() {
      return {
        message,
        duration,
        position,
        addPixelsY,
      };
    },
  };
}


function showWithOptions({ message, duration, position, addPixelsY }) {
  ToastAndroid.showWithGravityAndOffset(message, duration, position, 0, addPixelsY);
}

function showToast(message, duration, position) {
  showWithOptions(
    optionsBuilder()
      .withMessage(message || 'hi')
      .withDuration(duration)
      .withPosition(position)
      .build()
  );
}

export default class Toast {

  static showShortTop(message) {
    showToast(message, SHORT, TOP);
  }

  static showShortCenter(message) {
    showToast(message, SHORT, CENTER);
  }

  static showShortBottom(message) {
    showToast(message, SHORT, BOTTOM);
  }

  static showLongTop(message) {
    showToast(message, LONG, TOP);
  }

  static showLongCenter(message) {
    showToast(message, LONG, CENTER);
  }

  static showLongBottom(message) {
    showToast(message, LONG, BOTTOM);
  }

  static show(message) {
    showToast(message, SHORT, TOP);
  }

  static hide() {
    console.log('Toast.hide has been removed from android');
  }
}
