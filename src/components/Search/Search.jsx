import React from "react"

export const Search = () => {
    return (
        <section className="garamond">
            <div className="pa2">
                <input
                    className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                    type = "search"
                    placeholder = "&#128270; search"
                    style={{marginBottom: "20px", alignItems: "flex-end"}}
                />
            </div>
        </section>
    );
}