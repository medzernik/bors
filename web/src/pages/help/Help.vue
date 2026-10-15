<script setup lang="ts"></script>

<template>
    <h1>Bors</h1>

    <h2>Repositories</h2>
    <ul class="repos">
        {% for repo in repos %}
        <li>
            <!-- <a href="queue/{{ repo.name }}">{{ repo.name }}</a> -->
            {% if repo.treeclosed %} [TREECLOSED] {% endif %}
        </li>
        {% endfor %}
    </ul>

    <h2>Commands</h2>
    <p>
        <!-- Commands must be posted as comments on the PR and mention the bot account (<code>{{ cmd_prefix }}</code -->
        <!-- >). -->
    </p>

    <!-- {{ help | safe }} -->

    <div style="text-align: center; margin-top: 1em">
        <a href="https://github.com/rust-lang/bors">Contribute on GitHub</a>
    </div>
</template>

<style lang="scss">
@import "/src/main.css";
@import "./help.css";
</style>
