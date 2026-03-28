# React 19 latest features

<!-- React19Info -->
<div>
      <div>
        <h3>React 19 new features</h3>
        <ul>
          <li>New Hooks</li>
          <ol>
            <li>"use()"</li>
            <li>useOptimistic</li>
            <li>useTransition</li>
            <li>useFormStatus</li>
            <li>useActionState</li>
          </ol>
          <li>React DOM - prerender, (react-dom/static)</li>
          <ol>
            <li>prerender</li>
            <li>prerenderToNodestream</li>
          </ol>
          <li>New changes </li>
          <ol>
            <li>
              ref - can be passed as prop, no need to use forwardRef for
              functional components
              <pre>
                <code>
                  {`function MyInput({placeholder, ref}) {
  return <input placeholder={placeholder} ref={ref} />;
}

// Usage
<MyInput ref={ref} />`}
                </code>
              </pre>
            </li>
          </ol>
          <li>updated error messages (single message)</li>
          <li>
            Context as a Provider, no need to give Provider again, directly pass
            values
            <pre>
              <code>
                {`
const ThemeContext = createContext();

            <ThemeContext value={"Somu"}>
                {children}
            </ThemeContext>
            `}
              </code>
            </pre>
          </li>
          <li>Cleanup functions for ref</li>
          <pre>
            <code>{`
            <input type="text"
                ref={() => {

                    return () => {
                        //ref cleanup
                    }
                }} />
          `}</code>
          </pre>
          <li>useDererredValue - with initial value</li>
          <pre>
            <code>{`function Search({deferredValue}){
    // on initial render it's value is ""
    // Then re-render is scheduled with the deferred value
    const value = useDeferredValue(deferredValue, "");
    return (<Results query={value} />)

}`}</code>
          </pre>
          <li>Styles</li>
          <li>Support for loading async scripts</li>
          <pre>
            <code>{`
function MyComponent() {
return (

<div>
<script async={true} src=".."/>
<h3>Hello World</h3>
</div>
);

            function App(){
                return (
                    <MyComponent /> //loads the script once,
                    ...
                    <MyComponent /> // will not load or call the script as it's already done
                );
            }
        }`}</code>
          </pre>
        </ul>
      </div>
    </div>
