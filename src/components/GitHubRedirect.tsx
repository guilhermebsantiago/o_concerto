import { DiGithubBadge } from "react-icons/di";
function GitHubRedirect() {
  return (
    <a
      href="https://github.com/guilhermebsantiago/o_concerto"
      className="absolute top-12 right-6"
    >
      <DiGithubBadge className="text-white w-4 h-4" />
    </a>
  );
}

export default GitHubRedirect;
