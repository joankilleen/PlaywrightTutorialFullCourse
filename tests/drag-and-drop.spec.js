const { test, expect } = require('@playwright/test');

test('How to do  drab and drop in an iframe', async( {page} )=>{
  //Open JQuery test page
  page.goto('https://jqueryui.com/droppable/');

  const myFrame = page.frameLocator(".demo-frame");
  const draggableElement = myFrame.locator('#draggable');
  const targetElement = myFrame.locator('#droppable');
  await draggableElement.dragTo(targetElement);

})