module.exports = {
    "presets": [
        "next/babel"
    ],
    "plugins": [
        [
            "styled-components",
            {
                "ssr": true,
                "displayName": true,
                "preprocess": false
            },
            "inline-svg-react"
        ],
        [
            "import", {
                "libraryName": "antd",
                "style": true
            },
        ]

    ],
}
