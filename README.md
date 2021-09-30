# Emotion Performance Repro

This is a toy example showing the performance issue on development builds. This will add 316
stylesheets on initial render, and then toggling the theme increases it to 644 stylesheets. When
analyzing the render time using the browsers profiler, a development build takes ~2x longer to
switch between themes than the release build equivalent (where there is only 1 stylesheet added to
the head element).

In a production environment where there are multiple dynamic styles, and rendering more than just
one type of component. This number jumps to 4k+ stylesheets being added to the head. This results in
loading pages being in the 1-2 second range, and toggling between themes being 20+ seconds. Creating
a release build of this brings performance of toggling between themes back to basically instant.
