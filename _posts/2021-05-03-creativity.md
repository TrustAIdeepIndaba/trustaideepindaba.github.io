---
layout: post
title: Towards creativity characterization of generative models in the Activation Space
---

We're going to be presenting some preliminary results in our work ["Towards creativity characterization of generative models via group-based subset scanning"](https://arxiv.org/pdf/2104.00479.pdf) at [Synthetic Data Generation Workshop at ICLR'21](https://sdg-quality-privacy-bias.github.io/papers/)

![Overview](/public/post/overview.png){:height="256px" style="float: center; margin-right: 1em"}

Creativity is a process that  **provides novel and meaningful ideas**. Current deep learning approaches open a new direction enabling the study of creativity from a knowledge acquisition perspective. Novelty generation using powerful deep generative models, such as Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs), have been attempted. 
However, such models **discourage** out-of-distribution generation to avoid instability and decrease spurious sample generation, **limiting their creative** generation potential. We propose **group-based subset scanning** to quantify, detect, and characterize creative processes by detecting a subset of anomalous **node-activations in the hidden layers of generative models**. Our experiments on original, typically decoded, and "creatively decoded" (Das et al., 2020) image datasets reveal that the proposed subset scores distribution is more **useful for detecting creative processes in the activation space rather than the pixel space**. Further, we found that creative samples generate larger subsets of anomalies than normal or non-creative samples across datasets. Also, the node activations highlighted during the creative decoding process
are different from those responsible for normal sample generation.

![Poster](/public/post/output.gif){:height="512px" style="float: center; margin-right: 1em"}

