const branchName = process.env.GIT_BRANCH || process.env.CI_COMMIT_REF_NAME;

if (!branchName) {
  console.error('Unable to determine branch name');
  process.exit(1);
}

const validBranchNameRegex = /^((feature|bugfix|hotfix|release)\/[a-z0-9-]+|main|master|develop)$/;

if (!validBranchNameRegex.test(branchName)) {
  console.error(
    `Invalid branch name "${branchName}". Branch names must follow the pattern: feature/*, bugfix/*, hotfix/*, release/*, main, master, or develop.`
  );
  process.exit(1);
}