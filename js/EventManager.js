export default class EventManager {
  ElementEventListener(element, eventType, method) {
    if (element) {
      element.addEventListener(eventType, (event) => {
        event.preventDefault();
        method(event.target.textContent);
      });
    }
  }

  NoneElementEventListener(eventType, method){
    document.addEventListener(eventType, (event) => method(event));
  }
}
