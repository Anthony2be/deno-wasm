use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b;
}

#[wasm_bindgen(start)]
pub fn run() -> Result<(), JsValue> {
    create_window()?;

    Ok(())
}

fn create_window() -> Result<(), JsValue> {
    // Use `web_sys`'s global `window` function to get a handle on the global
    // window object.
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");

    // Manufacture the element we're gonna append
    let div = document.create_element("div")?;
    div.set_id("mydiv");

    let divheader = document.create_element("div")?;
    divheader.set_id("mydivheader");
    divheader.set_text_content(Some("Hello from Rust!"));

    let divcontent = document.create_element("p")?;
    divcontent.set_text_content(Some("idk content"));

    body.append_child(&div)?;
    div.append_child(&divheader)?;
    div.append_child(&divcontent)?;

    Ok(())
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
