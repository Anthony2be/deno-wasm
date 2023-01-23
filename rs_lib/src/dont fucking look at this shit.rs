//this is just some code for drag that i was working on, might actually use it later

{
    let element = divheader.clone();
    let div = div.clone();

    let pos1 = Rc::new(Cell::new(0));
    let pos2 = Rc::new(Cell::new(0));
    let pos3 = Rc::new(Cell::new(0));
    let pos4 = Rc::new(Cell::new(0));

    let isdragging = Rc::new(Cell::new(false));

    {
      let isdragging1 = isdragging.clone();
      let element1 = element.clone();
      let pos3 = pos3.clone();
      let pos4 = pos4.clone();
      let mousedownthing =
        EventListener::new(&element1, "mousedown", move |event| {
          let event = event.clone().dyn_into::<web_sys::MouseEvent>().unwrap();
          pos3.set(event.client_x());
          pos4.set(event.client_y());
          isdragging1.set(true);
        });
      mousedownthing.forget();
    }

    {
      let isdragging2 = isdragging.clone();
      let element3 = element.clone();
      let mouseupthing =
        EventListener::new(&element3, "mouseup", move |_event| {
          isdragging2.set(false)
        });

      mouseupthing.forget();
    }

    {
      let pos1 = pos1.clone();
      let pos2 = pos2.clone();
      let pos3 = pos3.clone();
      let pos4 = pos4.clone();

      let isdragging3 = isdragging.clone();
      let element2 = element.clone();
      let mousemovething =
        EventListener::new(&element2, "mousemove", move |event| {
          let event = event.clone().dyn_into::<web_sys::MouseEvent>().unwrap();
          if isdragging3.get() {
            pos1.set(pos3.get() - event.client_x());
            pos2.set(pos4.get() - event.client_y());
            pos3.set(event.client_x());
            pos4.set(event.client_y());
            
            div
              .style()
              .set_property("top", &format!("{}px", div.offset_top() - pos2.get()))
              .unwrap();
            div
              .style()
              .set_property("left", &format!("{}px", div.offset_left() - pos1.get()))
              .unwrap();
          }
        });
      mousemovething.forget();
    }
  }