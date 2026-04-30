---
layout: post
title: "Interactive 3D visualization of Complex Roots of High-Degree Polynomials"
date: 2026-04-30 22:29:00 +0000
permalink: /:year/:month/:day/:title.html
excerpt_separator: <!--more-->
description: "Interactive 3D visualization showing the behavior of complex roots. You can rotate and zoom into the graph directly."
tags: Math Python Polynomials Creative-Coding 3D
---

Below is a 3D interactive visualization of complex roots of High-Degree Polynomials. **Note:** The interactive 3D model is resource-heavy and may be disabled on some mobile devices to prevent crashes.

<!--more-->

<div id="viz-container" style="width: 100%; height: 600px; background: #111; display: flex; align-items: center; justify-content: center; border: 1px solid #333; position: relative;">
  
  <img id="viz-preview" src="/assets/images/new_polynomial_new_3d_formula_6_final.png" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">

  <button onclick="loadViz()" id="load-btn" style="position: absolute; padding: 15px 25px; font-size: 1.1rem; cursor: pointer; background: #007bff; color: white; border: none; border-radius: 5px;">
    Click to Load Interactive 3D Viz
  </button>

  <iframe 
    id="viz-iframe"
    src="" 
    data-src="{{ '/assets/visualizations/new_polynomial_interactive_jekyll.html' | relative_url }}" 
    width="100%" 
    height="100%" 
    frameborder="0" 
    style="display: none;">
  </iframe>
</div>

<script>
function loadViz() {
  var iframe = document.getElementById('viz-iframe');
  var btn = document.getElementById('load-btn');
  var preview = document.getElementById('viz-preview');
  
  // Set the source only when clicked
  iframe.src = iframe.getAttribute('data-src');
  iframe.style.display = 'block';
  
  // Hide the UI elements
  btn.style.display = 'none';
  preview.style.display = 'none';
}
</script>

[Open Full Screen (Recommended for Mobile)]({{ '/assets/visualizations/new_polynomial_interactive_jekyll.html' | relative_url }})

*Generated with Python · [@lbarqueira.bsky.social](https://bsky.app/profile/lbarqueira.bsky.social)*
