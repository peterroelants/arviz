(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("29f08575-d494-4cd7-b851-4e0e9de45e9e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '29f08575-d494-4cd7-b851-4e0e9de45e9e' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"daf24152-e9be-4c2c-8953-2ce4ebcb661d":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20547","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"20582"},"toolbar_location":"above"},"id":"20583","type":"ToolbarBox"},{"attributes":{},"id":"20571","type":"BasicTickFormatter"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20577"},"selection_policy":{"id":"20576"}},"id":"20564","type":"ColumnDataSource"},{"attributes":{},"id":"20572","type":"AllLabels"},{"attributes":{},"id":"20577","type":"Selection"},{"attributes":{},"id":"20541","type":"BasicTicker"},{"attributes":{},"id":"20528","type":"DataRange1d"},{"attributes":{},"id":"20534","type":"LinearScale"},{"attributes":{"callback":null},"id":"20551","type":"HoverTool"},{"attributes":{},"id":"20549","type":"UndoTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20552","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20567","type":"Title"},{"attributes":{},"id":"20575","type":"AllLabels"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20563","type":"Scatter"},{"attributes":{},"id":"20532","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"20564"},"glyph":{"id":"20563"},"group":null,"hover_glyph":null,"view":{"id":"20566"}},"id":"20565","type":"GlyphRenderer"},{"attributes":{},"id":"20530","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20571"},"group":null,"major_label_policy":{"id":"20572"},"ticker":{"id":"20541"}},"id":"20540","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20553","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"20540"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20543","type":"Grid"},{"attributes":{"children":[{"id":"20583"},{"id":"20581"}]},"id":"20584","type":"Column"},{"attributes":{"coordinates":null,"formatter":{"id":"20574"},"group":null,"major_label_policy":{"id":"20575"},"ticker":{"id":"20537"}},"id":"20536","type":"LinearAxis"},{"attributes":{},"id":"20576","type":"UnionRenderers"},{"attributes":{},"id":"20550","type":"SaveTool"},{"attributes":{"toolbars":[{"id":"20554"}],"tools":[{"id":"20544"},{"id":"20545"},{"id":"20546"},{"id":"20547"},{"id":"20548"},{"id":"20549"},{"id":"20550"},{"id":"20551"}]},"id":"20582","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"20552"}},"id":"20546","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"20536"}],"center":[{"id":"20539"},{"id":"20543"}],"height":288,"left":[{"id":"20540"}],"output_backend":"webgl","renderers":[{"id":"20565"}],"title":{"id":"20567"},"toolbar":{"id":"20554"},"toolbar_location":null,"width":432,"x_range":{"id":"20528"},"x_scale":{"id":"20532"},"y_range":{"id":"20530"},"y_scale":{"id":"20534"}},"id":"20527","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"20536"},"coordinates":null,"group":null,"ticker":null},"id":"20539","type":"Grid"},{"attributes":{"overlay":{"id":"20553"}},"id":"20548","type":"LassoSelectTool"},{"attributes":{},"id":"20545","type":"PanTool"},{"attributes":{},"id":"20544","type":"ResetTool"},{"attributes":{},"id":"20537","type":"BasicTicker"},{"attributes":{"source":{"id":"20564"}},"id":"20566","type":"CDSView"},{"attributes":{"children":[[{"id":"20527"},0,0]]},"id":"20581","type":"GridBox"},{"attributes":{"tools":[{"id":"20544"},{"id":"20545"},{"id":"20546"},{"id":"20547"},{"id":"20548"},{"id":"20549"},{"id":"20550"},{"id":"20551"}]},"id":"20554","type":"Toolbar"},{"attributes":{},"id":"20574","type":"BasicTickFormatter"}],"root_ids":["20584"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"daf24152-e9be-4c2c-8953-2ce4ebcb661d","root_ids":["20584"],"roots":{"20584":"29f08575-d494-4cd7-b851-4e0e9de45e9e"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();