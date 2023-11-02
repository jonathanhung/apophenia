---
{"type":"articles","date_created":"2023-08-26","aliases":null,"topic":null,"url":"https://lambdalabs.com/blog/stylegan-3","layout":null,"banner":null,"dg-publish":true,"tags":null,"permalink":"/300-biblio/200-articles/style-gan-3/","dgPassFrontmatter":true,"created":"2023-10-20T12:44:21.000-05:00","updated":"2023-10-20T12:44:21.000-05:00"}
---

## Metadata
---
![rw-book-cover](https://lambdalabs.com/hubfs/Imported_Blog_Media/wikiart.jpg#keepProtocol)
- Author:: [[Justin Pinkney\|Justin Pinkney]]
- Title:: StyleGAN 3
- topic::  



## Insights
---
## Related Nodes
---

## Highlights 
---
- So what do you need to train your own StyleGAN 3 model? Well the code has been [released on GitHub](https://github.com/NVlabs/stylegan3) along with many pre-trained models, of course on top of that you'll need some data and GPUs to run the training.
  As the author's point out, the new StyleGAN is slightly more computationally expensive to run given the architecture changes above. They also provide a [handy breakdown](https://github.com/NVlabs/stylegan3/blob/main/docs/configs.md) of the expected memory requirements and example training times on V100 and A100 GPUs at various configurations.
  To train the largest models (1024x1024 pixels) from scratch (25 million images) will take about 6 days on 8x A100 GPUs, but in general you won't need to go these efforts. As in many other areas of deep learning, transfer learning is an effective approach for training a new StyleGAN model. Using a high quality starting point (like one of the existing FFHQ models) you can get to reasonable quality results within a few hundred thousand images. ([View Highlight](https://read.readwise.io/read/01h8sfx5fn9jwhc8ggvjmgw3b6))
