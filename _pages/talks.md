---
layout: page
permalink: /talks/
title: talks
description:
nav: true
nav_order: 5
banner_image: quad-deepc.pdf
banner_position: center 57%
banner_height: 300px
---

{% assign talks_by_year = site.data.talks | group_by: "year" | sort: "name" | reverse %}

{% for group in talks_by_year %}

## {{ group.name }}
___

{% for talk in group.items %}
<div class="row mb-4 align-items-center">
  {% if talk.image %}
  <div class="col-md-4">
    {% if talk.slides %}
    <a href="{{ talk.slides | relative_url }}">
    {% endif %}
      {% include figure.liquid
         path=talk.image
         class="img-fluid rounded"
         alt=talk.title %}
    {% if talk.slides %}
    </a>
    {% endif %}
  </div>
  {% endif %}
  <div class="col-md-8">
    <h4 class="mb-1">{{ talk.title }}</h4>
    <p class="text-muted mb-0">{{ talk.event }}</p>
    {% if talk.location %}
    <p class="text-muted">{{ talk.location }}</p>
    {% endif %}
    {% if talk.slides %}
    <a href="{{ talk.slides | relative_url }}" class="small">[slides]</a>
    {% endif %}
  </div>
</div>
{% unless forloop.last %}{% endunless %}
{% endfor %}

{% endfor %}
