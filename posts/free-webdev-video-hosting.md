---
title: Free Webdev Video Hosting
references:
  - https://stackoverflow.com/questions/50168709/html-video-not-playing-in-safari-browser
  - https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/CreatingVideoforSafarioniPhone/CreatingVideoforSafarioniPhone.html#//apple_ref/doc/uid/TP40006514-SW6
  - https://vercel.com/guides/best-practices-for-hosting-videos-on-vercel-nextjs-mp4-gif
---

## Context

I was developing a very basic website. So basic that I could've just used plain HTML. But I wanted to be fancy and chosed to use 11ty.

I've deployed the last few projects to Vercel, and so I chose to continue with that trend. Especially given that Vercel have a generous free tier.

The intro section of the site was to contain a fullscreen background video. However, neither the 11ty local dev server nor Vercel would display the video when viewed in Safari.

## Diagnosis

Safari requires a server that supports Byte-Range requests. The docs specific it's only on iOS, but I also experienced the issue on MacOS.

I decided to perform a test on my local machine with `python3 -m http.server`, unaware of whether it had the appropriate support.

Fortunately, it worked. The next step was to decide on where to host the media content.

## Solution

Media assets should ideally be hosted on a dedicated content platform. Vercel doesn't support this, and suggests using third-parties such as S3+Cloudfront. Popular video hosting platform like YouTube and Vimeo don't work as intended. This is because they require embedding the video within an `iframe`. Fortunately, there is a hack with Google Drive. And this is the option I chose to leverage.

First, upload a video to Google Drive and make it public. Viewing the file should direct to a page with the following format: `https://drive.google.com/file/d/{VIDEO_ID}`. However, this doesn't provide direct access to the file. Instead, we want to leverage this alternative domain: `https://drive.google.com/uc?id={VIDEO_ID}&export=download`.

Then, we simply add this alternative domain as a video source:

```
<video autoplay loop muted>
  <source src="https://drive.google.com/uc?id={VIDEO_ID}&export=download" type="video/mp4">
</video>
```

For anything ultra-low budget, this Google Drive hack is the best option for free video hosting.
