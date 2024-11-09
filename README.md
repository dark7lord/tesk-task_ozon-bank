# Прогресс-Бар

![image](https://github.com/user-attachments/assets/89bf8f14-ab44-4a60-996d-ee15e5b53223)

Этот прогресс-бар представляет собой интерактивный элемент, который позволяет отображать прогресс в виде круглого индикатора. Прогресс-бар может изменять свое значение, анимацию, видимость и другие параметры.



## Пример использования

```html
<div class="chart"></div>

<input type="number" id="progressValue" min="0" max="100" value="50">
<label for="progressValue">Progress Value</label>

<input type="checkbox" id="progressAnimate">
<label for="progressAnimate">Animate</label>

<input type="checkbox" id="progressHide">
<label for="progressHide">Hide</label>

<script src="script.js"></script>
```

```javascript
const progressBar = createProgressBar('.chart');

// Устанавливаем значение прогресса
progressBar.setValue(75); 

// Включаем анимацию
progressBar.toggleAnimation(true);

// Скрываем прогресс-бар
progressBar.toggleVisibility(false);

// Сбрасываем прогресс-бар
progressBar.reset();
```

## API

Прогресс-бар включает следующие методы:

### 1. `setValue(value: number)`
**Описание**: Устанавливает значение прогресса (от 0 до 100).
- **Параметры**:
  - `value`: Число, которое представляет процент выполнения прогресса (от 0 до 100).
- **Пример**:
  ```javascript
  progressBar.setValue(50); // Устанавливает прогресс на 50%
  ```

### 2. `toggleAnimation(isEnabled: boolean)`
**Описание**: Включает или выключает анимацию вращения прогресс-бара.
- **Параметры**:
  - `isEnabled`: Булевое значение. `true` включает анимацию вращения, `false` — отключает.
- **Пример**:
  ```javascript
  progressBar.toggleAnimation(true); // Включает анимацию
  progressBar.toggleAnimation(false); // Отключает анимацию
  ```

### 3. `toggleVisibility(isVisible: boolean)`
**Описание**: Управляет видимостью индикатора прогресса.
- **Параметры**:
  - `isVisible`: Булевое значение. `true` делает прогресс-бар видимым, `false` — скрывает.
- **Пример**:
  ```javascript
  progressBar.toggleVisibility(true); // Показывает прогресс-бар
  progressBar.toggleVisibility(false); // Скрывает прогресс-бар
  ```

### 4. `show()`
**Описание**: Делает прогресс-бар видимым (аналогично `toggleVisibility(true)`).
- **Пример**:
  ```javascript
  progressBar.show(); // Показывает прогресс-бар
  ```

### 5. `hide()`
**Описание**: Скрывает прогресс-бар (аналогично `toggleVisibility(false)`).
- **Пример**:
  ```javascript
  progressBar.hide(); // Скрывает прогресс-бар
  ```

### 6. `reset()`
**Описание**: Сбрасывает значения состояния прогресс-бара. Устанавливает значение прогресса в 0, отключает анимацию и делает прогресс-бар видимым.
- **Пример**:
  ```javascript
  progressBar.reset(); // Сбрасывает прогресс-бар к начальным значениям
  ```

### 7. `render()`
**Описание**: Обновляет отображение прогресс-бара. Этот метод вызывается автоматически при изменении состояния, но может быть вызван вручную для явного обновления отображения.
- **Пример**:
  ```javascript
  progressBar.render(); // Обновляет прогресс-бар
  ```


## Демо

Пример развернутого проекта доступен по ссылке: [GitHub Pages](https://dark7lord.github.io/tesk-task_ozon-bank)

## Примечания

1. Прогресс-бар обновляется автоматически при изменении состояния через методы. Вы также можете вручную обновить представление, вызвав `render()`.
2. Прогресс-бар синхронизирует значения с полями ввода, если они изменяются в интерфейсе.
