import { writable } from 'svelte/store';

// const store = writable(localStorage.getItem("store") || "");

export const repos = writable(JSON.parse(localStorage.getItem('@githubSearch::repos')) || []);

repos.subscribe(value => localStorage.setItem('@githubSearch::repos', JSON.stringify(value)));

export function addRepo(repo) {
  repos.update(actualRepos => [...actualRepos, repo])
}

export function bootstrapRepos(repos) {
  repos.update(() => [...repos])
}