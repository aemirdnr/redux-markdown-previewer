import { createSlice } from "@reduxjs/toolkit";

const textHelp = `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

 *[@aemirdnr](https://github.com/aemirdnr)*
 `;

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    input: "This is user input.",
    help: textHelp,
    isOpen: false,
  },
  reducers: {
    inputUpdate: (state, action) => {
      state.input = action.payload;
    },
    openInfo: (state) => {
      if (state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    },
  },
});

export const { inputUpdate, openInfo } = markdownSlice.actions;
export default markdownSlice.reducer;
