const createProgressBar = (chartSelector) => {
  const chart = document.querySelector(chartSelector);

  const state = new Proxy({
    value: 75,
    isAnimated: false,
    isHidden: false,
  }, {
    set(target, key, value) {
      target[key] = value;
      render();
      return true;
    }
  });

  const render = () => {
    chart.style.setProperty('--progress-value', `${state.value}%`);
    chart.classList.toggle('chart--animated', state.isAnimated);
    chart.style.display = state.isHidden ? 'none' : 'initial';
  };

  return {
    setValue: (value) => { state.value = value; },
    toggleAnimation: (isEnabled) => { state.isAnimated = isEnabled; },
    toggleVisibility: (isVisible) => { state.isHidden = !isVisible; },
    show: () => state.isHidden = false,
    hide: () => state.isHidden = true,
    reset: () => { state.value = 0; state.isAnimated = false; state.isHidden = false; },
    render
  };
};

const progressApp = () => {
  const progressBar = createProgressBar('.chart');
  progressBar.render();

  const controls = {
    progressValueInput: document.querySelector('#progressValue'),
    animateCheckbox: document.querySelector('#progressAnimate'),
    hideCheckbox: document.querySelector('#progressHide'),
  };

  controls.progressValueInput.addEventListener('change', (event) => {
    progressBar.setValue(event.target.value);
  });

  controls.animateCheckbox.addEventListener('change', (event) => {
    progressBar.toggleAnimation(event.target.checked);
  });

  controls.hideCheckbox.addEventListener('change', (event) => {
    progressBar.toggleVisibility(!event.target.checked);
  });

  return progressBar;
};

// Инициализация приложения
const progress = progressApp();
