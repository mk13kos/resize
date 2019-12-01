# Resize
Example resize app on angular 8. [Run]

Форкнуть шаблон приложения и на его основе реализовать в отдельном аккуратно оформленном модуле, в отдельном каталоге

* структурную директиву ifViewportSize, которая рендерит элемент, если ширина окна браузера соответствует переданному значения. Ширина браузера может изменяться после запуска приложения.
* сервис, который занимается определением текущей ширины окна браузера и должен получать на этапе инициализации конфиг с пороговыми значениями для разных типов ширины (нижнее значение, с которого начинается соответствующий тип)
* конфиг для сервиса должен передаваться через AppModule

Для тестирования раскомментировать разметку в app.component.html.

Обратить внимание на производительность (на странице могут быть сотни произвольных компонентов)

```bash
interface IConfig {
  medium: number;
  large: number;
}
```

```bash
small: viewportWidth < config.medium
medium: config.medium <= viewportWidth < config.large
large: config.large <= viewportWidth
```

[шаблон приложения]: https://stackblitz.com/edit/vim8-2-resize-template?file=app%2Fapp.component.html
[Run]: https://stackblitz.com/github/mk13kos/resize
