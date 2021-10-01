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
    
      
      
    
      const element = document.getElementById("57bfe95f-3f4a-45a1-ab92-67931c19d469");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '57bfe95f-3f4a-45a1-ab92-67931c19d469' but no matching script tag was found.")
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
                    
                  const docs_json = '{"ad191a86-0383-4002-82f9-990fd3e80072":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"21137"},"glyph":{"id":"21138"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21140"},"nonselection_glyph":{"id":"21139"},"view":{"id":"21142"}},"id":"21141","type":"GlyphRenderer"},{"attributes":{},"id":"21149","type":"AllLabels"},{"attributes":{},"id":"21115","type":"BasicTicker"},{"attributes":{},"id":"21148","type":"BasicTickFormatter"},{"attributes":{},"id":"21102","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21126","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"21125","type":"HoverTool"},{"attributes":{"axis":{"id":"21110"},"coordinates":null,"group":null,"ticker":null},"id":"21113","type":"Grid"},{"attributes":{"toolbar":{"id":"21159"},"toolbar_location":"above"},"id":"21160","type":"ToolbarBox"},{"attributes":{},"id":"21119","type":"PanTool"},{"attributes":{},"id":"21108","type":"LinearScale"},{"attributes":{},"id":"21111","type":"BasicTicker"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21127","type":"PolyAnnotation"},{"attributes":{},"id":"21121","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"21126"}},"id":"21120","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"21114"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21117","type":"Grid"},{"attributes":{},"id":"21124","type":"SaveTool"},{"attributes":{},"id":"21118","type":"ResetTool"},{"attributes":{"children":[{"id":"21160"},{"id":"21158"}]},"id":"21161","type":"Column"},{"attributes":{},"id":"21152","type":"AllLabels"},{"attributes":{},"id":"21151","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"21127"}},"id":"21122","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21144","type":"Title"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21151"},"group":null,"major_label_policy":{"id":"21152"},"ticker":{"id":"21111"}},"id":"21110","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21140","type":"Circle"},{"attributes":{},"id":"21104","type":"DataRange1d"},{"attributes":{},"id":"21106","type":"LinearScale"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21143","type":"Span"},{"attributes":{"tools":[{"id":"21118"},{"id":"21119"},{"id":"21120"},{"id":"21121"},{"id":"21122"},{"id":"21123"},{"id":"21124"},{"id":"21125"}]},"id":"21128","type":"Toolbar"},{"attributes":{},"id":"21123","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21139","type":"Circle"},{"attributes":{},"id":"21153","type":"UnionRenderers"},{"attributes":{},"id":"21154","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21138","type":"Circle"},{"attributes":{"toolbars":[{"id":"21128"}],"tools":[{"id":"21118"},{"id":"21119"},{"id":"21120"},{"id":"21121"},{"id":"21122"},{"id":"21123"},{"id":"21124"},{"id":"21125"}]},"id":"21159","type":"ProxyToolbar"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21148"},"group":null,"major_label_policy":{"id":"21149"},"ticker":{"id":"21115"}},"id":"21114","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21154"},"selection_policy":{"id":"21153"}},"id":"21137","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"21101"},0,0]]},"id":"21158","type":"GridBox"},{"attributes":{"below":[{"id":"21110"}],"center":[{"id":"21113"},{"id":"21117"}],"height":500,"left":[{"id":"21114"}],"output_backend":"webgl","renderers":[{"id":"21141"},{"id":"21143"}],"title":{"id":"21144"},"toolbar":{"id":"21128"},"toolbar_location":null,"width":500,"x_range":{"id":"21102"},"x_scale":{"id":"21106"},"y_range":{"id":"21104"},"y_scale":{"id":"21108"}},"id":"21101","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"21137"}},"id":"21142","type":"CDSView"}],"root_ids":["21161"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"ad191a86-0383-4002-82f9-990fd3e80072","root_ids":["21161"],"roots":{"21161":"57bfe95f-3f4a-45a1-ab92-67931c19d469"}}];
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