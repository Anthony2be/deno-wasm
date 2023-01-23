use gloo::events::EventListener;
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b;
}

#[wasm_bindgen(start)]
pub fn run() -> Result<(), JsValue> {
  create_window()?;
  create_window()?;
  eventlistener_new_button_click();

  Ok(())
}

fn create_window() -> Result<(), JsValue> {
  // Use `web_sys`'s global `window` function to get a handle on the global
  // window object.
  let window = web_sys::window().expect("no global `window` exists");
  let document = window.document().expect("should have a document on window");
  let body = document.body().expect("document should have a body");

  // Manufacture the element we're gonna append
  let div = document
    .create_element("div")?
    .dyn_into::<web_sys::HtmlDivElement>()?;
  div.set_id("mydiv");
  let div = Rc::new(div);

  let divheader = document.create_element("div")?;
  divheader.set_id("mydivheader");
  divheader.set_text_content(Some("Hello from Rust!"));
  let divheader = Rc::new(divheader);

  let divcontent = document.create_element("p")?;
  divcontent.set_text_content(Some("idk content"));

  let closebutton = document
    .create_element("button")?
    .dyn_into::<web_sys::HtmlButtonElement>()?;
  closebutton.set_text_content(Some("Close"));
  let closebutton = Rc::new(closebutton);

  {
    let clonedthing = closebutton.clone();
    let cloneddiv = div.clone();
    let on_click = EventListener::new(&clonedthing, "click", move |_event| {
      web_sys::console::log_1(&"Hello World".into());
      //event.target().unwrap().dyn_into::<web_sys::HtmlButtonElement>().unwrap().style().set_property("display", "none").unwrap();
      //closebutton.style().set_property("display", "none");
      cloneddiv.style().set_property("display", "none").unwrap();
    });
    on_click.forget();
  }

  let button = document
    .create_element("button")?
    .dyn_into::<web_sys::HtmlButtonElement>()?;
  button.set_inner_html("Open Window");
  let button = Rc::new(button);

  {
    let div = div.clone();
    let button = button.clone();
    let on_click = EventListener::new(&button, "click", move |_event| {
      div.style().set_property("display", "block").unwrap();
    });
    on_click.forget();
  }

  div.append_child(&divheader)?;
  div.append_child(&divcontent)?;
  div.append_child(&closebutton)?;
  body.append_child(&div)?;
  body.append_child(&button)?;

  Ok(())
}

fn eventlistener_new_button_click() {
  let window = web_sys::window().expect("global window does not exists");
  let document = window.document().expect("expecting a document on window");
  let body = document
    .body()
    .expect("document expect to have have a body");
  let button = document.create_element("button").unwrap();
  button.set_inner_html("Button");

  let on_click = EventListener::new(&button, "click", move |_event| {
    web_sys::console::log_1(&"Hello World".into());
  });
  on_click.forget();
  body.append_child(&button).unwrap();
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn it_works() {
    let result = add(1, 2);
    assert_eq!(result, 3);
  }
}
