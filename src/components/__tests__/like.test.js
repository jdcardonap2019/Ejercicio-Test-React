import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Like from "../like";

 let container;

 //helpers
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<Like />, container);
    });
  });
  
afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

//Pruebas
  describe("Testing like component", () => {
      /**
     * Incluya, en una suite, las siguientes pruebas:
     * 1. Que por defecto, el componente muestra en el párrafo el valor "Likes: 0".
     * 2. Que cuando se hace clic en el botón Like, el número de likes se incremente en uno.
     * 3. Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.
     */
    //Verificando el valor 0 de Likes
    it("Likes:0 by default", () => {
      const p = container.querySelector("p");
      expect(p.textContent).toBe("Likes: 0");
    });
    //Cuando se haga click en Like, el número de Likes incremente en uno
    it("Likes increment in 1", () => {
      const p = container.querySelector("p");
      const buttonLike= container.querySelector("#increment");
      act(() => {
        buttonLike.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
      expect(p.textContent).toBe("Likes: 1");
    });
    //Cuando se haga click en Dislike, el número de Likes decremente en uno
    it("Likes decrement in 1", () => {
        const p = container.querySelector("p");
        const buttonDislike= container.querySelector("#decrement");
        act(() => {
          buttonDislike.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(p.textContent).toBe("Likes: -1");
      });
  });