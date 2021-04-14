import { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { InputNumber } from 'antd';
import { Cascader, Select } from 'antd';
import { DatePicker } from 'antd';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function Forms() {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const history = useHistory()
  const [load, setLoad] = useState(false)
  const [uname, setUname] = useState("")
  const onGenderChange = (value: any) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onNameChange = (e: any) => {
    setUname(e.target.value)
  }
  const onFinish = (values: any) => {
    setLoad(true)
    const obj = {
      uname: values.username, pass: values.password, amount: values.amount, cascader: values.cascader[values.cascader.length - 1],
      dob: JSON.stringify(values.dateOfBirth["_d"]), note: values.note, gender: values.gender
    }
    setTimeout(() => {
      dispatch({ type: "Submit", payload: obj })

      setLoad(false)
      history.push("/comp2")

    }, 5000)

  };
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],

        },
        {
          value: 'hangzhou1',
          label: 'Hangzhou1',
          children: [
            {
              value: 'xihu1',
              label: 'West1 Lake1',
            },
            {
              value: 'xihu2',
              label: 'West2 Lake2',
            },
            {
              value: 'xihu2',
              label: 'West2 Lake2',
            }
          ],

        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = () => {

  }
  function displayRender(label: any) {
    return label[label.length - 1];
  }


  return (
    <>

      <Form className="d-flex flex-column align-items-center justify-content-center my-5"
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          label="Username"
          className="my-3 w-50"
          name="username"
          tooltip="please write something"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}

        >
          <Input value={uname} onChange={(e: any) => onNameChange(e)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          className="my-3 w-50"

          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <input value={uname}  placeholder="write something"/>


        <Form.Item label="amount" name="amount"
          className="my-3 w-50"

          rules={
            [
              {
                required: true,

              }
            ]
          } >
          <InputNumber
            value={1000}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item label="Cascader" name="cascader" className="my-3 w-50"
        >
          <Cascader
            options={options}
            expandTrigger="hover"
            displayRender={displayRender}
          />
        </Form.Item>
        <Form.Item
          name="note"
          className="w-50 my-3"
          label="Note"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          className="my-3 w-50"

          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
            <Select.Option value="other">other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="dateOfBirth" label="dateOfBirth" rules={[{ required: true }]}

          className="my-3 w-50"

        >
          <DatePicker onChange={onChange} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round" loading={load}>
            Submit
              </Button>
        </Form.Item>
      </Form>

    </>
  );
}

