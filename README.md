# Emotion Performance Repro

This is a toy example showing the performance issue on development builds. This will add 316
stylesheets on initial render, and then toggling the theme increases it to 644 stylesheets. When
analyzing the render time using the browsers profiler, a development build takes ~2x longer to
switch between themes than the release build equivalent (where there is only 1 stylesheet added to
the head element).

In real world applications where there are multiple dynamic styles, and multiple component types
being rendered, the number of stylesheets being appended to the head jumps into the 4k+ range in
development builds. Dev builds take 20+ seconds to toggle a theme, and loading new pages takes
several seconds. If you run a release build, this number of applied stylesheets becomes 3, and there
are no performance implications (well not noticable as everything is back in the ms render time range).

With 4k+ stylesheets, as you add more components (i.e. increase the number of buttons on a page), you
can see render times drastically increase per component added.

From observations it's almost like render times correlate to `#_of_stylesheets * #_of_components`.
So 4000 X 1(button) is some manageable render time, lets say 1 second. When you increase to 20
buttons it then becomes 4000 X 20, and render times jump substantially into like the ~20 second range.
