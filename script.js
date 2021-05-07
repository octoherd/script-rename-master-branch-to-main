// @ts-check

/**
 * Renames the default branch to main if it is currently set to master
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 */
export async function script(octokit, repository) {
  if (repository.default_branch !== "master") {
    octokit.log.info(
      `Default branch is not "master" but "${repository.default_branch}", ignoring`
    );
    return;
  }

  if (!repository.permissions.admin) {
    octokit.log.warn(`You don't have admin permission, ignoring`);
    return;
  }

  if (repository.archived) {
    octokit.log.info(
      `Repository is archived, ignoring`
    );
    return;
  }

  await octokit.request("POST /repos/{owner}/{repo}/branches/{branch}/rename", {
    owner: repository.owner.login,
    repo: repository.name,
    branch: "master",
    new_name: "main",
  });

  octokit.log.info(`Default branch renamed to "main"`);
}
