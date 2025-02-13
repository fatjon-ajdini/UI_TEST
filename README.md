# Teamboks UI - Technical Assessment  

Hey there! 👋  

Welcome to the Teamboks UI technical assessment. We’re excited to see your creativity and approach to building flexible and reusable components. No need to stress – have fun and show us how you think about component design!  

## Setup  

1. Clone this repository to your local machine.  
2. Install dependencies:  

   ```bash
   npm install
   ```  

3. Start Storybook:  

   ```bash
   npm run storybook
   ```  

Storybook will open in your default browser.  

---

## Requirements  

### Core Features  

1. Support for **multiple alert types**:  
   - `success`  
   - `error`  
   - `warning`  
   - `info`  

2. Flexible layouts:  
   - Title + description  
   - Description only  
   - With/without an icon  

3. Optional close button.  
4. Customizable themes/variants.  
5. Accessibility-friendly implementation.  

### Technical Details  

- Use **React**, **ShadCN** and **TypeScript**.  
- Write **Storybook stories** to showcase the flexibility and reusability of your components.  

---

## Example Usage  

Here are a few examples of how the `Alert` component could be used:  

```jsx
<Alert type="success">Operation completed</Alert>  

<Alert  
  type="warning"  
  title="Update Available"  
  description="A new version is ready to install."  
/>  

<Alert  
  type="info"  
  variant="subtle"  
  icon={<CustomIcon />}  
  onClose={() => {}}  
>  
  Custom content here  
</Alert>
```

---

## Optional Challenge (Just for Fun)  

If you’re feeling adventurous, we’ve got an extra challenge for you!  

### Build a Multi-Select Component Using ShadCN  

- Create a **multi-select dropdown** with support for async options (e.g., options fetched from an API).  
- Include flexible props like:  
  - `placeholder`  
  - `loading` state  
  - Clear functionality  

- Write stories to showcase:  
  - Loading state
  - Custom placeholder text
  - Pre-selected options 
  - Disabled options

#### Example Usage  

```jsx
<MultiSelect  
  options={async () => fetchOptions()}  
  placeholder="Select items..."  
  isLoading={false}  
  onChange={(selected) => console.log(selected)}  
/>
```  

This challenge is purely optional – no pressure! It’s a great way to show off if you’re feeling up for it.  

---

## Evaluation Criteria  

We’re looking for the following:  

1. **Component API design** – Is it intuitive and flexible?  
2. **Flexibility & reusability** – Can the component adapt to different scenarios?  
3. **TypeScript implementation** – Are types used effectively to ensure reliability and clarity?  
4. **Story organization** – Are stories well-structured and demonstrate the component’s potential?  
5. **Code quality** – Is the code clean, readable, and maintainable?  

Have fun with it! We’re so excited to see what you create! 🚀

