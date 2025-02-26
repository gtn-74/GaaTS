# storybook

```typescript
const meta: Meta<typeof CastTabs> = {
  title: "cast/navigation/CastTabs",
  component: CastTabs,
  tags: ["autodocs"],
  argTypes: {
    casts: {
      control: "object",
      description: "Cast[]のitem.ATTRIBUTES.titleを取り出してlabelに格納してる",
      table: { type: { summary: "Maybe<Cast[]>" } }, // 型情報をシンプルに表示するAPI
    },
    callback: {
      table: { disable: false }, // 明示的に書くと、これ。 デフォルトだから書かないでも良い
    },
    dependentStateValue: {
      table: { disable: false },
      description: "ブラウザの進む戻るとTabのフォーカスが連動しない",
    },
  },
};
```

した、一緒

```typescript
type Story = StoryObj<{
  breadcrumbs: Breadcrumb[];
}>;
```

```typescript
type Story = StoryObj<typeof Breadcrumbs>;
```

```typescript
import { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";
import MainModal, { Props, RegisterHandler } from ".";
import { Button, Typography } from "@mui/material";

const meta: Meta<Props> = {
  title: "common/ui/MainModal",
  component: MainModal,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text", description: "モーダルのタイトル" },
    ModalWidth: { control: "text", description: "モーダルの幅" },
    openHandler: {
      action: "openHandler",
      description: "モーダルを開いた時のハンドラー",
    },
    closeHandler: {
      action: "closeHandler",
      description: "モーダルを閉じた時のハンドラー",
    },
  },
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    text: "モーダルのタイトル",
    ModalWidth: "400px",
  },
  render: (args) => {
    const modalRef = useRef<RegisterHandler>(null);

    return (
      <>
        <Button onClick={() => modalRef.current?.open()}>Open Modal</Button>
        <MainModal ref={modalRef} {...args}>
          <Typography variant="body1">モーダルのコンテンツ</Typography>
        </MainModal>
      </>
    );
  },
};
```

```typescript
import { Meta, StoryObj } from "@storybook/react";
import React, { useRef } from "react";
import MainModal, { Props, RegisterHandler } from ".";
import { Button, Typography } from "@mui/material";

const meta: Meta<Props> = {
  title: "common/ui/MainModal",
  component: MainModal,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text", description: "モーダルのタイトル" },
    ModalWidth: { control: "text", description: "モーダルの幅" },
    openHandler: {
      action: "openHandler",
      description: "モーダルを開いた時のハンドラー",
    },
    closeHandler: {
      action: "closeHandler",
      description: "モーダルを閉じた時のハンドラー",
    },
  },
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    text: "モーダルのタイトル",
    ModalWidth: "400px",
  },
  render: (args) => {
    const modalRef = useRef<RegisterHandler>(null);

    return (
      <>
        <Button onClick={() => modalRef.current?.open()}>Open Modal</Button>
        <MainModal ref={modalRef} {...args}>
          <Typography variant="body1">モーダルのコンテンツ</Typography>
        </MainModal>
      </>
    );
  },
};
```

```typescript
{
  cast?.ATTRIBUTES?.shooting_date?.length > 0 ? (
    cast.ATTRIBUTES.shooting_date.map(
      (range: { end_date: string; start_date: string }, index: number) => (
        <isc.ApplyForm__ShootingDate key={index}>
          <div className="applyForm--shootingDate">
            {toJapanFormat(range?.start_date)}
            <br />
            {range?.end_date ? (
              <span>{toJapanFormat(range?.end_date)}</span>
            ) : (
              ""
            )}
          </div>
          <Controller
            name={`shooting_date.${index}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <isc.ApplyForm__Answer variant="filled">
                <Select
                  {...field}
                  displayEmpty
                  id={`select-${index}`}
                  onChange={(event) => {
                    const selectedValue = event.target.value;
                    field.onChange(selectedValue);
                    setApplyInfoState((prev) => ({
                      ...prev,
                      shooting_date: [
                        ...(prev.shooting_date ?? []).slice(0, index),
                        selectedValue,
                        ...(prev.shooting_date ?? []).slice(index + 1),
                      ],
                    }));
                  }}
                >
                  <isc.ApplyForm__AnswerMenu value="" disabled>
                    未回答
                  </isc.ApplyForm__AnswerMenu>
                  <isc.ApplyForm__AnswerMenu value="1">
                    ◯
                  </isc.ApplyForm__AnswerMenu>
                  <isc.ApplyForm__AnswerMenu value="2">
                    △
                  </isc.ApplyForm__AnswerMenu>
                  <isc.ApplyForm__AnswerMenu value="3">
                    ✕
                  </isc.ApplyForm__AnswerMenu>
                </Select>
              </isc.ApplyForm__Answer>
            )}
          />
        </isc.ApplyForm__ShootingDate>
      )
    )
  ) : (
    <p>本番撮影日の日時は調整中です。</p>
  );
}
```
