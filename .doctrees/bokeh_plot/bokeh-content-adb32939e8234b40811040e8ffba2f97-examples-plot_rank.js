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
    
      
      
    
      const element = document.getElementById("4e4326a1-fa61-4a9c-b9b8-e7e6e9661ffb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4e4326a1-fa61-4a9c-b9b8-e7e6e9661ffb' but no matching script tag was found.")
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
                    
                  const docs_json = '{"9256539f-d581-4602-bfe6-6cbc5cdfa2a0":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"47970"},{"id":"48004"}],"tools":[{"id":"47960"},{"id":"47961"},{"id":"47962"},{"id":"47963"},{"id":"47964"},{"id":"47965"},{"id":"47966"},{"id":"47967"},{"id":"47994"},{"id":"47995"},{"id":"47996"},{"id":"47997"},{"id":"47998"},{"id":"47999"},{"id":"48000"},{"id":"48001"}]},"id":"48112","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"48112"},"toolbar_location":"above"},"id":"48113","type":"ToolbarBox"},{"attributes":{},"id":"48085","type":"UnionRenderers"},{"attributes":{},"id":"48086","type":"Selection"},{"attributes":{},"id":"48100","type":"UnionRenderers"},{"attributes":{},"id":"48101","type":"Selection"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47968","type":"BoxAnnotation"},{"attributes":{},"id":"48087","type":"UnionRenderers"},{"attributes":{},"id":"48088","type":"Selection"},{"attributes":{},"id":"47984","type":"LinearScale"},{"attributes":{"callback":null},"id":"47967","type":"HoverTool"},{"attributes":{},"id":"48102","type":"UnionRenderers"},{"attributes":{},"id":"47961","type":"PanTool"},{"attributes":{},"id":"48103","type":"Selection"},{"attributes":{},"id":"48078","type":"BasicTickFormatter"},{"attributes":{},"id":"48079","type":"AllLabels"},{"attributes":{},"id":"47946","type":"DataRange1d"},{"attributes":{"below":[{"id":"47952"}],"center":[{"id":"47955"},{"id":"47959"},{"id":"48019"},{"id":"48026"},{"id":"48033"},{"id":"48040"}],"height":331,"left":[{"id":"47956"}],"output_backend":"webgl","renderers":[{"id":"48017"},{"id":"48024"},{"id":"48031"},{"id":"48038"}],"title":{"id":"48043"},"toolbar":{"id":"47970"},"toolbar_location":null,"width":496,"x_range":{"id":"47944"},"x_scale":{"id":"47948"},"y_range":{"id":"47946"},"y_scale":{"id":"47950"}},"id":"47943","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"47968"}},"id":"47962","type":"BoxZoomTool"},{"attributes":{},"id":"48081","type":"BasicTickFormatter"},{"attributes":{},"id":"47982","type":"LinearScale"},{"attributes":{},"id":"48082","type":"AllLabels"},{"attributes":{"axis":{"id":"47956"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47959","type":"Grid"},{"attributes":{},"id":"48089","type":"UnionRenderers"},{"attributes":{},"id":"48090","type":"Selection"},{"attributes":{"axis":{"id":"47952"},"coordinates":null,"group":null,"ticker":null},"id":"47955","type":"Grid"},{"attributes":{},"id":"47960","type":"ResetTool"},{"attributes":{},"id":"47963","type":"WheelZoomTool"},{"attributes":{},"id":"48104","type":"UnionRenderers"},{"attributes":{},"id":"48105","type":"Selection"},{"attributes":{"overlay":{"id":"47969"}},"id":"47964","type":"LassoSelectTool"},{"attributes":{},"id":"47965","type":"UndoTool"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48081"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48082"},"ticker":{"id":"47953"}},"id":"47952","type":"LinearAxis"},{"attributes":{},"id":"47950","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3]},"id":"48041","type":"FixedTicker"},{"attributes":{},"id":"47948","type":"LinearScale"},{"attributes":{},"id":"48095","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48113"},{"id":"48111"}]},"id":"48114","type":"Column"},{"attributes":{},"id":"48096","type":"AllLabels"},{"attributes":{},"id":"48083","type":"UnionRenderers"},{"attributes":{},"id":"48098","type":"BasicTickFormatter"},{"attributes":{},"id":"48084","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48043","type":"Title"},{"attributes":{},"id":"47944","type":"DataRange1d"},{"attributes":{},"id":"48099","type":"AllLabels"},{"attributes":{},"id":"48106","type":"UnionRenderers"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48078"},"group":null,"major_label_policy":{"id":"48079"},"ticker":{"id":"48041"}},"id":"47956","type":"LinearAxis"},{"attributes":{},"id":"48107","type":"Selection"},{"attributes":{},"id":"47966","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48019","type":"Span"},{"attributes":{"tools":[{"id":"47960"},{"id":"47961"},{"id":"47962"},{"id":"47963"},{"id":"47964"},{"id":"47965"},{"id":"47966"},{"id":"47967"}]},"id":"47970","type":"Toolbar"},{"attributes":{},"id":"47953","type":"BasicTicker"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47969","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48016","type":"VBar"},{"attributes":{"axis":{"id":"47990"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47993","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48075","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48015","type":"VBar"},{"attributes":{"source":{"id":"48013"}},"id":"48018","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48084"},"selection_policy":{"id":"48083"}},"id":"48013","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48026","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48022","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48013"},"glyph":{"id":"48014"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48016"},"nonselection_glyph":{"id":"48015"},"view":{"id":"48018"}},"id":"48017","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48086"},"selection_policy":{"id":"48085"}},"id":"48020","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48021","type":"VBar"},{"attributes":{"callback":null},"id":"48001","type":"HoverTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48028","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48023","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48020"},"glyph":{"id":"48021"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48023"},"nonselection_glyph":{"id":"48022"},"view":{"id":"48025"}},"id":"48024","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48035","type":"VBar"},{"attributes":{"source":{"id":"48020"}},"id":"48025","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48029","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48033","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48088"},"selection_policy":{"id":"48087"}},"id":"48027","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48030","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48027"},"glyph":{"id":"48028"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48030"},"nonselection_glyph":{"id":"48029"},"view":{"id":"48032"}},"id":"48031","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48046","type":"VBar"},{"attributes":{"source":{"id":"48027"}},"id":"48032","type":"CDSView"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48095"},"group":null,"major_label_policy":{"id":"48096"},"ticker":{"id":"48073"}},"id":"47990","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48036","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48040","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48098"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48099"},"ticker":{"id":"47987"}},"id":"47986","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48090"},"selection_policy":{"id":"48089"}},"id":"48034","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48037","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48034"},"glyph":{"id":"48035"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48037"},"nonselection_glyph":{"id":"48036"},"view":{"id":"48039"}},"id":"48038","type":"GlyphRenderer"},{"attributes":{},"id":"47987","type":"BasicTicker"},{"attributes":{"source":{"id":"48034"}},"id":"48039","type":"CDSView"},{"attributes":{"axis":{"id":"47986"},"coordinates":null,"group":null,"ticker":null},"id":"47989","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48014","type":"VBar"},{"attributes":{"source":{"id":"48045"}},"id":"48050","type":"CDSView"},{"attributes":{"overlay":{"id":"48002"}},"id":"47996","type":"BoxZoomTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"48073","type":"FixedTicker"},{"attributes":{},"id":"47995","type":"PanTool"},{"attributes":{"below":[{"id":"47986"}],"center":[{"id":"47989"},{"id":"47993"},{"id":"48051"},{"id":"48058"},{"id":"48065"},{"id":"48072"}],"height":331,"left":[{"id":"47990"}],"output_backend":"webgl","renderers":[{"id":"48049"},{"id":"48056"},{"id":"48063"},{"id":"48070"}],"title":{"id":"48075"},"toolbar":{"id":"48004"},"toolbar_location":null,"width":496,"x_range":{"id":"47944"},"x_scale":{"id":"47982"},"y_range":{"id":"47946"},"y_scale":{"id":"47984"}},"id":"47979","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"47994","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48047","type":"VBar"},{"attributes":{},"id":"48000","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48101"},"selection_policy":{"id":"48100"}},"id":"48045","type":"ColumnDataSource"},{"attributes":{},"id":"47997","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"47943"},0,0],[{"id":"47979"},0,1]]},"id":"48111","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48051","type":"Span"},{"attributes":{"overlay":{"id":"48003"}},"id":"47998","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48048","type":"VBar"},{"attributes":{},"id":"47999","type":"UndoTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48058","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48054","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48045"},"glyph":{"id":"48046"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48048"},"nonselection_glyph":{"id":"48047"},"view":{"id":"48050"}},"id":"48049","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"47994"},{"id":"47995"},{"id":"47996"},{"id":"47997"},{"id":"47998"},{"id":"47999"},{"id":"48000"},{"id":"48001"}]},"id":"48004","type":"Toolbar"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48103"},"selection_policy":{"id":"48102"}},"id":"48052","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48053","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48060","type":"VBar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48002","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48055","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48052"},"glyph":{"id":"48053"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48055"},"nonselection_glyph":{"id":"48054"},"view":{"id":"48057"}},"id":"48056","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48067","type":"VBar"},{"attributes":{"source":{"id":"48052"}},"id":"48057","type":"CDSView"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48003","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48061","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48065","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48105"},"selection_policy":{"id":"48104"}},"id":"48059","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48062","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48059"},"glyph":{"id":"48060"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48062"},"nonselection_glyph":{"id":"48061"},"view":{"id":"48064"}},"id":"48063","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48059"}},"id":"48064","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48068","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48072","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48107"},"selection_policy":{"id":"48106"}},"id":"48066","type":"ColumnDataSource"},{"attributes":{"source":{"id":"48066"}},"id":"48071","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48069","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48066"},"glyph":{"id":"48067"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48069"},"nonselection_glyph":{"id":"48068"},"view":{"id":"48071"}},"id":"48070","type":"GlyphRenderer"}],"root_ids":["48114"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"9256539f-d581-4602-bfe6-6cbc5cdfa2a0","root_ids":["48114"],"roots":{"48114":"4e4326a1-fa61-4a9c-b9b8-e7e6e9661ffb"}}];
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