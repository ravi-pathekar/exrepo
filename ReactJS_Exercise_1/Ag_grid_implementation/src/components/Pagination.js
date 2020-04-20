import React, { Component } from 'react'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiPagination,
  EuiPopover,
} from '@elastic/eui';

export default class Pagination extends Component {

  constructor(props) {

    const { paginationPageSize } = props
    super(props)
  
    this.state = {
       isPopoverOpen: false,
       activePage: 0,
       pageSize: paginationPageSize
    }
  }

  onButtonClick = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen
    })
  };

  closePopover = () => {
    this.setState({
      isPopoverOpen: false
    })
  };

  goToPage = pageNumber => {
    this.setState({
      activePage: pageNumber
    },
    () => {
      this.props.onPaginationChange(this.state.pageSize, this.state.activePage)
    })
  };

  setPageSize = size => {
    this.setState({
      pageSize: size
    },
    () => {
      this.props.onPaginationChange(this.state.pageSize, this.state.activePage)
    })
  };


  render() {
    const { isPopoverOpen, activePage, pageSize } = this.state;
    const { pageCount } = this.props;
    const button = (
      <EuiButtonEmpty
        size="s"
        color="text"
        iconType="arrowDown"
        iconSide="right"
        onClick={this.onButtonClick}>
        Rows per page: {pageSize}
      </EuiButtonEmpty>
    );

    const items = [
      <EuiContextMenuItem
        key="2 rows"
        icon="empty"
        onClick={() => {
          this.closePopover();
          this.setPageSize(2);
        }}>
        2 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="5 rows"
        icon="empty"
        onClick={() => {
          this.closePopover();
          this.setPageSize(5);
        }}>
        5 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="8 rows"
        icon="empty"
        onClick={() => {
          this.closePopover();
          this.setPageSize(8);
        }}>
        8 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="10 rows"
        icon="empty"
        onClick={() => {
          this.closePopover();
          this.setPageSize(10);
        }}>
        10 rows
      </EuiContextMenuItem>,
    ];
    return (
      <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiPopover
            button={button}
            isOpen={isPopoverOpen}
            closePopover={this.closePopover}
            panelPaddingSize="none">
            <EuiContextMenuPanel items={items} />
          </EuiPopover>
        </EuiFlexItem>

    <EuiFlexItem grow={false}>
      <EuiPagination
        pageCount={pageCount}
        activePage={activePage}
        onPageClick={activePage => this.goToPage(activePage)}
      />
    </EuiFlexItem>
  </EuiFlexGroup>
);
}

}

