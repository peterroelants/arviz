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
    
      
      
    
      const element = document.getElementById("5d58a5f6-a00c-4c33-ab53-90b98fd4ab0b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5d58a5f6-a00c-4c33-ab53-90b98fd4ab0b' but no matching script tag was found.")
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
                    
                  const docs_json = '{"29ca78db-cea1-443b-81e4-5f5f867de96f":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"20851"}},"id":"20846","type":"LassoSelectTool"},{"attributes":{},"id":"20832","type":"LinearScale"},{"attributes":{},"id":"20835","type":"BasicTicker"},{"attributes":{},"id":"20898","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20893"},"group":null,"major_label_policy":{"id":"20894"},"ticker":{"id":"20839"}},"id":"20838","type":"LinearAxis"},{"attributes":{},"id":"20847","type":"UndoTool"},{"attributes":{},"id":"20902","type":"UnionRenderers"},{"attributes":{"children":[{"id":"20911"},{"id":"20909"}]},"id":"20912","type":"Column"},{"attributes":{"coordinates":null,"data_source":{"id":"20879"},"glyph":{"id":"20880"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20882"},"nonselection_glyph":{"id":"20881"},"view":{"id":"20884"}},"id":"20883","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20862","type":"Circle"},{"attributes":{"source":{"id":"20873"}},"id":"20878","type":"CDSView"},{"attributes":{},"id":"20894","type":"AllLabels"},{"attributes":{},"id":"20903","type":"Selection"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20896"},"group":null,"major_label_policy":{"id":"20897"},"ticker":{"id":"20835"}},"id":"20834","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20905"},"selection_policy":{"id":"20904"}},"id":"20879","type":"ColumnDataSource"},{"attributes":{},"id":"20900","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20903"},"selection_policy":{"id":"20902"}},"id":"20873","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20882","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20864","type":"Circle"},{"attributes":{"source":{"id":"20879"}},"id":"20884","type":"CDSView"},{"attributes":{},"id":"20901","type":"Selection"},{"attributes":{},"id":"20848","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20875","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20899"},"selection_policy":{"id":"20898"}},"id":"20861","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20881","type":"Circle"},{"attributes":{"tools":[{"id":"20842"},{"id":"20843"},{"id":"20844"},{"id":"20845"},{"id":"20846"},{"id":"20847"},{"id":"20848"},{"id":"20849"}]},"id":"20852","type":"Toolbar"},{"attributes":{},"id":"20842","type":"ResetTool"},{"attributes":{},"id":"20839","type":"BasicTicker"},{"attributes":{"children":[[{"id":"20825"},0,0]]},"id":"20909","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20885","type":"Span"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20870","type":"Line"},{"attributes":{},"id":"20843","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"20861"},"glyph":{"id":"20862"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20864"},"nonselection_glyph":{"id":"20863"},"view":{"id":"20866"}},"id":"20865","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"20867"},"glyph":{"id":"20868"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20870"},"nonselection_glyph":{"id":"20869"},"view":{"id":"20872"}},"id":"20871","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"20838"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20841","type":"Grid"},{"attributes":{"above":[{"id":"20886"}],"below":[{"id":"20834"}],"center":[{"id":"20837"},{"id":"20841"}],"height":500,"left":[{"id":"20838"}],"output_backend":"webgl","renderers":[{"id":"20865"},{"id":"20871"},{"id":"20877"},{"id":"20883"},{"id":"20885"}],"title":{"id":"20889"},"toolbar":{"id":"20852"},"toolbar_location":null,"width":500,"x_range":{"id":"20826"},"x_scale":{"id":"20830"},"y_range":{"id":"20828"},"y_scale":{"id":"20832"}},"id":"20825","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20901"},"selection_policy":{"id":"20900"}},"id":"20867","type":"ColumnDataSource"},{"attributes":{},"id":"20830","type":"LinearScale"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20865"},{"id":"20871"}]},"id":"20887","type":"LegendItem"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20868","type":"Line"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20880","type":"Circle"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20850","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20851","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20876","type":"Line"},{"attributes":{},"id":"20828","type":"DataRange1d"},{"attributes":{},"id":"20896","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"20873"},"glyph":{"id":"20874"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20876"},"nonselection_glyph":{"id":"20875"},"view":{"id":"20878"}},"id":"20877","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20863","type":"Circle"},{"attributes":{"toolbars":[{"id":"20852"}],"tools":[{"id":"20842"},{"id":"20843"},{"id":"20844"},{"id":"20845"},{"id":"20846"},{"id":"20847"},{"id":"20848"},{"id":"20849"}]},"id":"20910","type":"ProxyToolbar"},{"attributes":{},"id":"20826","type":"DataRange1d"},{"attributes":{"overlay":{"id":"20850"}},"id":"20844","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20889","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20869","type":"Line"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20883"},{"id":"20877"}]},"id":"20888","type":"LegendItem"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20887"},{"id":"20888"}],"location":"center_right","orientation":"horizontal"},"id":"20886","type":"Legend"},{"attributes":{},"id":"20845","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"20849","type":"HoverTool"},{"attributes":{},"id":"20893","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"20910"},"toolbar_location":"above"},"id":"20911","type":"ToolbarBox"},{"attributes":{},"id":"20904","type":"UnionRenderers"},{"attributes":{},"id":"20905","type":"Selection"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20874","type":"Line"},{"attributes":{"source":{"id":"20861"}},"id":"20866","type":"CDSView"},{"attributes":{},"id":"20897","type":"AllLabels"},{"attributes":{"source":{"id":"20867"}},"id":"20872","type":"CDSView"},{"attributes":{},"id":"20899","type":"Selection"},{"attributes":{"axis":{"id":"20834"},"coordinates":null,"group":null,"ticker":null},"id":"20837","type":"Grid"}],"root_ids":["20912"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"29ca78db-cea1-443b-81e4-5f5f867de96f","root_ids":["20912"],"roots":{"20912":"5d58a5f6-a00c-4c33-ab53-90b98fd4ab0b"}}];
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