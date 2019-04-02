import React from "react";

class List extends React.Component {
  render() {
    console.log(this.props.result);
    return (
      <ul>
        {this.props.result.map(item => (
          <li key={item.id}>
            <div className="item-name">
              <a href={item.html_url}>
                <h1>{item.name}</h1>
              </a>
              <div className="item-stars">{item.stargazers_count}</div>
            </div>
            <div className="item-full-name">
              <h3>{item.full_name}</h3>
            </div>
            <div className="item-desc">
              <h2>{item.description}</h2>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
export default List;

// id: 29028775
// node_id: "MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ=="
// name: "react-native"
// full_name: "facebook/react-native"
// private: false
// owner: Object
// html_url: "https://github.com/facebook/react-native"
// description: "A framework for building native apps with React."
// fork: false
// url: "https://api.github.com/repos/facebook/react-native"
// forks_url: "https://api.github.com/repos/facebook/react-native/forks"
// keys_url: "https://api.github.com/repos/facebook/react-native/keys{/key_id}"
// collaborators_url: "https://api.github.com/repos/facebook/react-native/collaborators{/collaborator}"
// teams_url: "https://api.github.com/repos/facebook/react-native/teams"
// hooks_url: "https://api.github.com/repos/facebook/react-native/hooks"
// issue_events_url: "https://api.github.com/repos/facebook/react-native/issues/events{/number}"
// events_url: "https://api.github.com/repos/facebook/react-native/events"
// assignees_url: "https://api.github.com/repos/facebook/react-native/assignees{/user}"
// branches_url: "https://api.github.com/repos/facebook/react-native/branches{/branch}"
// tags_url: "https://api.github.com/repos/facebook/react-native/tags"
// blobs_url: "https://api.github.com/repos/facebook/react-native/git/blobs{/sha}"
// git_tags_url: "https://api.github.com/repos/facebook/react-native/git/tags{/sha}"
// git_refs_url: "https://api.github.com/repos/facebook/react-native/git/refs{/sha}"
// trees_url: "https://api.github.com/repos/facebook/react-native/git/trees{/sha}"
// statuses_url: "https://api.github.com/repos/facebook/react-native/statuses/{sha}"
// languages_url: "https://api.github.com/repos/facebook/react-native/languages"
// stargazers_url: "https://api.github.com/repos/facebook/react-native/stargazers"
// contributors_url: "https://api.github.com/repos/facebook/react-native/contributors"
// subscribers_url: "https://api.github.com/repos/facebook/react-native/subscribers"
// subscription_url: "https://api.github.com/repos/facebook/react-native/subscription"
// commits_url: "https://api.github.com/repos/facebook/react-native/commits{/sha}"
// git_commits_url: "https://api.github.com/repos/facebook/react-native/git/commits{/sha}"
// comments_url: "https://api.github.com/repos/facebook/react-native/comments{/number}"
// issue_comment_url: "https://api.github.com/repos/facebook/react-native/issues/comments{/number}"
// contents_url: "https://api.github.com/repos/facebook/react-native/contents/{+path}"
// compare_url: "https://api.github.com/repos/facebook/react-native/compare/{base}...{head}"
// merges_url: "https://api.github.com/repos/facebook/react-native/merges"
// archive_url: "https://api.github.com/repos/facebook/react-native/{archive_format}{/ref}"
// downloads_url: "https://api.github.com/repos/facebook/react-native/downloads"
// issues_url: "https://api.github.com/repos/facebook/react-native/issues{/number}"
// pulls_url: "https://api.github.com/repos/facebook/react-native/pulls{/number}"
// milestones_url: "https://api.github.com/repos/facebook/react-native/milestones{/number}"
// notifications_url: "https://api.github.com/repos/facebook/react-native/notifications{?since,all,participating}"
// labels_url: "https://api.github.com/repos/facebook/react-native/labels{/name}"
// releases_url: "https://api.github.com/repos/facebook/react-native/releases{/id}"
// deployments_url: "https://api.github.com/repos/facebook/react-native/deployments"
// created_at: "2015-01-09T18:10:16Z"
// updated_at: "2019-04-02T13:06:53Z"
// pushed_at: "2019-04-02T13:24:02Z"
// git_url: "git://github.com/facebook/react-native.git"
// ssh_url: "git@github.com:facebook/react-native.git"
// clone_url: "https://github.com/facebook/react-native.git"
// svn_url: "https://github.com/facebook/react-native"
// homepage: "https://facebook.github.io/react-native/"
// size: 320478
// stargazers_count: 75667
// watchers_count: 75667
// language: "JavaScript"
// has_issues: true
// has_projects: true
// has_downloads: true
// has_wiki: true
// has_pages: true
// forks_count: 16848
// mirror_url: null
// archived: false
// open_issues_count: 453
// license: Object
// forks: 16848
// open_issues: 453
// watchers: 75667
// default_branch: "master"
// score: 77.277
