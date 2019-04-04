import React from "react";

const List = props => {
  return (
    <React.Fragment>
      {props.result.map(item => (
        <div className="result-item" key={item.id}>
          <div className="item-name">
            <a href={item.html_url}>
              <span>{item.name}</span>
            </a>
            <div className="item-stars">🌟{item.stargazers_count}</div>
          </div>
          <div className="item-full-name">
            <span>{item.full_name}</span>
          </div>
          <div className="item-desc">
            <span>{item.description}</span>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
export default List;

//Result Properties from Github Api

// id:
// node_id:
// name:
// full_name:
// private:
// owner:
// html_url:
// description:
// fork:
// url:
// forks_url:
// keys_url:
// collaborators_url:
// teams_url:
// hooks_url:
// issue_events_url:
// events_url:
// assignees_url:
// branches_url:
// tags_url:
// blobs_url:
// git_tags_url:
// git_refs_url:
// trees_url:
// statuses_url:
// languages_url:
// stargazers_url:
// contributors_url:
// subscribers_url:
// subscription_url:
// commits_url:
// git_commits_url:
// comments_url:
// issue_comment_url:
// contents_url:
// compare_url:
// merges_url:
// archive_url:
// downloads_url:
// issues_url:
// pulls_url:
// milestones_url:
// notifications_url:
// labels_url:
// releases_url:
// deployments_url:
// created_at:
// updated_at:
// pushed_at:
// git_url:
// ssh_url:
// clone_url:
// svn_url:
// homepage:
// size:
// stargazers_count:
// watchers_count:
// language:
// has_issues:
// has_projects:
// has_downloads:
// has_wiki:
// has_pages:
// forks_count:
// mirror_url:
// archived:
// open_issues_count:
// license:
// forks:
// open_issues:
// watchers:
// default_branch:
// score:
