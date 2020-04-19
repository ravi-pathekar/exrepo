import React, { useState, Fragment } from 'react';

import {
  EuiComboBox,
  EuiButton,
  EuiFlexGroup,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
} from '@elastic/eui';

const options = [
  {
    label: 'Titan',
    'data-test-subj': 'titanOption',
  },
  {
    label: 'Enceladus',
  },
  {
    label: 'Mimas',
  },
  {
    label: 'Dione',
  },
  {
    label: 'Iapetus',
  },
  {
    label: 'Phoebe',
  },
  {
    label: 'Rhea',
  },
  {
    label: 'Tethys',
  },
  {
    label: 'Hyperion',
  },
];

export default () => {
  const [selectedOptions, setSelected] = useState([options[2], options[4]]);
  const [isModalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const onChange = selectedOptions => {
    setSelected(selectedOptions);
  };

  const onCreateOption = (searchValue, flattenedOptions = []) => {
    if (!searchValue) {
      return;
    }

const normalizedSearchValue = searchValue.trim().toLowerCase();

if (!normalizedSearchValue) {
  return;
}

const newOption = {
  label: searchValue,
};

if (
  flattenedOptions.findIndex(
    option => option.label.trim().toLowerCase() === normalizedSearchValue
  ) === -1
) {
  options.push(newOption);
}

setSelected([...selectedOptions, newOption]);
  };

  const comboBox = (
    <EuiComboBox
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChange}
      onCreateOption={onCreateOption}
    />
  );

  let modal;

  if (isModalVisible) {
    modal = (
      <EuiOverlayMask>
        <EuiModal onClose={closeModal} style={{ width: '800px' }}>
          <EuiModalHeader>
            <EuiModalHeaderTitle>Combo box in a modal</EuiModalHeaderTitle>
          </EuiModalHeader>

      <EuiModalBody>{comboBox}</EuiModalBody>
    </EuiModal>
  </EuiOverlayMask>
);
  }

  return (
    <Fragment>
    <EuiFlexGroup>
      <EuiFormRow>
        {comboBox}
      </EuiFormRow>
  <EuiButton size='s' onClick={showModal}>Show Modal</EuiButton>
  
  {modal}
  </EuiFlexGroup>
</Fragment>
  );
};

