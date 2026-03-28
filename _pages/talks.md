---
layout: page
permalink: /talks/
title: talks
description:
nav: true
nav_order: 5
---

{% assign talks_by_year = site.data.talks | group_by: "year" | sort: "name" | reverse %}

{% for group in talks_by_year %}

## {{ group.name }}
___

<div class="row mt-3 mb-4">
  {% for talk in group.items %}
  <div class="col-md-6 talk-card mb-4">
    <div class="card h-100">
      {% if talk.slides %}
      <a href="{{ talk.slides | relative_url }}">
      {% endif %}
        {% if talk.image %}
          {% include figure.liquid
             path=talk.image
             class="card-img-top img-fluid rounded"
             alt=talk.title %}
        {% endif %}
      {% if talk.slides %}
      </a>
      {% endif %}

      <div class="card-body text-center">
        <h5 class="card-title mb-2">{{ talk.title }}</h5>
        <p class="card-text small text-muted mb-1">{{ talk.event }}</p>
        {% if talk.location %}
        <p class="card-text small text-muted">{{ talk.location }}</p>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>

{% endfor %}