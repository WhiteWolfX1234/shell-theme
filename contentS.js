{
    "update_url": "https://clients2.google.com/service/update2/crx",
    "manifest_version": 2,
    "name": "BWD | Shell Shockers Theme",
    "version": "1",
    "author": "WhiteWolfX, Lyfe",
    "description": "New Shell Shockers Theme by WhiteWolfX, released on the 25th of May 2021!",
    "content_scripts": [
        {
            "js": [
                "content.js"
            ],
            "matches": [
                "https://shellshock.io/*"
            ]
        }
    ],
    "icons": {
        "128": "egg.png"
    }
}