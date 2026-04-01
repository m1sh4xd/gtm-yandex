# Yandex Webmaster verification template for GTM

This template does one thing only: it adds the Yandex Webmaster verification meta tag to the `head` of the site homepage.

```html
<meta name="yandex-verification" content="YOUR_ID">
```

## What is inside

- One input field: `Webmaster verification ID`.
- One helper script that creates or updates `meta[name="yandex-verification"]` in `head`.
- Duplicate protection: if the meta tag already exists in `head`, the script reuses it.

## GTM setup

1. Import [template.tpl](/Users/m1sh4xd/webmaster-gtm-template/template.tpl) into Google Tag Manager.
2. Create a tag from this template.
3. Paste the value from the `content` attribute that Yandex Webmaster gives you.
4. Set trigger to `Initialization - All Pages`.
5. Set `Advanced Settings -> Tag firing options` to `Once per page`.
6. Publish the container.

## Verification after publish

1. Open the site homepage and confirm that the page source contains `<meta name="yandex-verification" ...>` inside `head`.
2. In Yandex Webmaster, click `Verify`.
3. If verification fails, check that the same token is used and that the tag is present on the canonical homepage URL.

## Release note

The template uses `injectScript`, because GTM custom templates do not provide a direct API for writing into `document.head`. The helper file is [webmaster-verification.js](/Users/m1sh4xd/webmaster-gtm-template/webmaster-verification.js).

Before publishing the template for production use, host the helper script at a pinned versioned URL instead of `@main` and update the URL in [template.tpl](/Users/m1sh4xd/webmaster-gtm-template/template.tpl).
