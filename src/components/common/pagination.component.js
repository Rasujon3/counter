import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};
  render() {
    const { total, pageCount, activePage, onChangePage } = this.props;
    const totalPages = Math.ceil(total / pageCount);
    const pages = _.range(1, totalPages + 1, 1);
    return (
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link">Previous</a>
          </li>
          {pages.map((page) => (
            <li
              onClick={() => onChangePage(page)}
              class={activePage === page ? "page-item active" : "page-item"}
            >
              <a class="page-link ">{page}</a>
            </li>
          ))}
          <li class="page-item">
            <a class="page-link">Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
