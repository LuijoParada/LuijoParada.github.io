const { OverlayScrollbars, ClickScrollPlugin } = OverlayScrollbarsGlobal;

// optional: use the ClickScrollPlugin to make the option "scrollbars.clickScroll: true" available
OverlayScrollbars.plugin(ClickScrollPlugin);

OverlayScrollbars(document.body, {
  scrollbars: {
    clickScroll: true,
    theme : 'os-theme-dark',
    scrollbars:{
      visibility : 'auto',
    }
  },
});
OverlayScrollbars(document.querySelector(".project-description"), {});
OverlayScrollbars(document.querySelector("body"), {});
OverlayScrollbars(document.querySelector(".about-text"), {});

