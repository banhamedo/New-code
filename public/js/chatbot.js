class Chatbot {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.context = {
            lastService: null,
            lastQuestion: null,
            userPreferences: {}
        };
        this.initializeChatbot();
        this.setupEventListeners();
        console.log('Chatbot instance created and initialized.');
    }

    initializeChatbot() {
        console.log('initializeChatbot method called.');
        const chatbotHTML = `
            <div class="chatbot-container" id="chatbot" style="display: none; z-index:10000; padding: 20px 12px 16px 12px; box-shadow: 0 8px 32px 0 rgba(0,0,0,0.35); border-radius: 18px; background: #18181b;">
                <div class="chatbot-header" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <button class="minimize-btn" id="minimizeChatbot" style="background: none; border: none; color: #fff; font-size: 22px; cursor: pointer;">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="chatbot-title-group" style="display: flex; align-items: center; gap: 8px;">
                        <h3 style="margin: 0; font-size: 1.1rem; color: #fff; font-weight: 700;">مساعد New Code</h3>
                        <div class="robot-header-icon" style="color: #22c55e; font-size: 1.2rem;">
                            <i class="fas fa-robot"></i>
                            <span class="notification-badge"></span>
                        </div>
                    </div>
                </div>
                <div class="chatbot-messages" id="chatbotMessages" style="flex: 1 1 auto; min-height: 120px; max-height: 220px; overflow-y: auto; margin-bottom: 10px; color: #fff;"></div>
                <div class="suggested-questions-area" id="chatbotSuggestedQuestions" style="margin-bottom: 10px;"></div>
                <div class="chatbot-input" style="display: flex; align-items: center; gap: 8px;">
                    <input type="text" id="userInput" placeholder="اكتب رسالتك هنا..." style="flex: 1 1 auto; padding: 8px 12px; border-radius: 8px; border: 1px solid #333; background: #23272f; color: #fff; font-size: 1rem; outline: none;" />
                    <button id="sendMessage" style="background: #22c55e; color: #fff; border: none; border-radius: 8px; padding: 8px 16px; font-size: 1.1rem; cursor: pointer; transition: background 0.2s;">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            <button class="chatbot-toggle" id="chatbotToggle" style="display: flex; position: fixed; bottom: 20px; right: 20px; z-index: 9999; width: 60px; height: 60px; border-radius: 50%; background-color:#22c55e; color: white; border: none; cursor: pointer; box-shadow: 0 4px 24px 0 rgba(0,0,0,0.25); align-items: center; justify-content: center; transition: all 0.3s ease;">
                <i class="fas fa-robot" style="font-size: 24px;"></i>
            </button>
        `;
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        console.log('Chatbot HTML inserted into the DOM.');
    }

    setupEventListeners() {
        console.log('setupEventListeners method called.');
        const toggleBtn = document.getElementById('chatbotToggle');
        const minimizeBtn = document.getElementById('minimizeChatbot');
        const sendBtn = document.getElementById('sendMessage');
        const userInput = document.getElementById('userInput');

        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                console.log('Toggle button clicked');
                this.toggleChatbot();
            });
            console.log('toggleBtn event listener set up.');
        } else {
            console.error('Toggle button not found!');
        }
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => this.toggleChatbot());
            console.log('minimizeBtn event listener set up.');
        }
        if (sendBtn) {
            sendBtn.addEventListener('click', () => this.handleUserMessage());
            console.log('sendBtn event listener set up.');
        }
        if (userInput) {
            userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleUserMessage();
            });
            console.log('userInput event listener set up.');
        }
    }

    toggleChatbot() {
        const chatbot = document.getElementById('chatbot');
        const toggleBtn = document.getElementById('chatbotToggle');
        
        if (chatbot && toggleBtn) {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                chatbot.style.display = 'flex';
                chatbot.style.flexDirection = 'column';
                chatbot.style.position = 'fixed';
                chatbot.style.top = '80px';
                chatbot.style.right = '20px';
                chatbot.style.width = '350px';
                chatbot.style.maxWidth = '95vw';
                chatbot.style.height = '500px';
                chatbot.style.maxHeight = '80vh';
                chatbot.style.background = '#18181b';
                chatbot.style.borderRadius = '18px';
                chatbot.style.boxShadow = '0 8px 32px 0 rgba(0,0,0,0.25)';
                chatbot.style.zIndex = '10000';
            } else {
                chatbot.style.display = 'none';
            }
            toggleBtn.style.display = this.isOpen ? 'none' : 'flex';
            
            if (this.isOpen) {
                const suggestedQuestionsArea = document.getElementById('chatbotSuggestedQuestions');
                if (suggestedQuestionsArea) {
                    suggestedQuestionsArea.innerHTML = '';
                }
                this.addBotMessage("مرحباً! أنا مساعد New Code. كيف يمكنني مساعدتك اليوم؟");
                this.showSuggestedQuestions();
            }
        }
    }

    showSuggestedQuestions() {
        const suggestedQuestions = [
            {
                text: "ما هي الخدمات التي تقدمونها؟",
                icon: "fa-laptop-code",
                color: "#22c55e"
            },
            {
                text: "كيف يمكنني التواصل معكم؟",
                icon: "fa-phone",
                color: "#3498db"
            },
            {
                text: "ما هي أنظمة ERP التي تقدمونها؟",
                icon: "fa-cogs",
                color: "#eab308"
            },
            {
                text: "كيف يمكنني البدء في مشروعي؟",
                icon: "fa-rocket",
                color: "#22c55e"
            },
            {
                text: "ما هي تكلفة الخدمات؟",
                icon: "fa-tag",
                color: "#eab308"
            }
        ];

        const questionsContainer = document.createElement('div');
        questionsContainer.className = 'suggested-questions';
        
        suggestedQuestions.forEach(question => {
            const questionButton = document.createElement('button');
            questionButton.className = 'suggested-question-btn';
            questionButton.style.background = '#23272f';
            questionButton.style.color = '#fff';
            questionButton.style.border = 'none';
            questionButton.style.borderRadius = '8px';
            questionButton.style.padding = '7px 12px';
            questionButton.style.margin = '3px 0';
            questionButton.style.fontSize = '1rem';
            questionButton.style.display = 'flex';
            questionButton.style.alignItems = 'center';
            questionButton.style.gap = '8px';
            questionButton.style.boxShadow = '0 2px 8px 0 rgba(0,0,0,0.10)';
            questionButton.style.transition = 'background 0.2s, transform 0.1s';
            questionButton.onmouseover = () => { questionButton.style.background = '#18181b'; questionButton.style.transform = 'scale(1.03)'; };
            questionButton.onmouseout = () => { questionButton.style.background = '#23272f'; questionButton.style.transform = 'scale(1)'; };
            questionButton.innerHTML = `
                <span class="question-text">${question.text}</span>
                <span class="question-icon" style="color: ${question.color}">
                    <i class="fas ${question.icon}"></i>
                </span>
            `;
            questionButton.addEventListener('click', () => {
                document.getElementById('userInput').value = question.text;
                this.handleUserMessage();
                questionButton.classList.add('clicked');
                setTimeout(() => questionButton.classList.remove('clicked'), 300);
            });
            questionsContainer.appendChild(questionButton);
        });

        const suggestedQuestionsArea = document.getElementById('chatbotSuggestedQuestions');
        suggestedQuestionsArea.appendChild(questionsContainer);
    }

    async handleUserMessage() {
        const userInput = document.getElementById('userInput');
        const message = userInput.value.trim();
        
        if (message) {
            this.addUserMessage(message);
            userInput.value = '';
            
            const response = await this.generateResponse(message);
            this.addBotMessage(response);
        }
    }

    addUserMessage(message) {
        this.messages.push({ type: 'user', content: message });
        this.updateChatDisplay();
    }

    addBotMessage(message) {
        this.messages.push({ type: 'bot', content: message });
        this.updateChatDisplay();
        
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot-message typing';
        typingIndicator.innerHTML = `
            <div class="typing-indicator">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        messagesContainer.appendChild(typingIndicator);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom before timeout
        setTimeout(() => {
            messagesContainer.removeChild(typingIndicator);
            messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll again after message appears
        }, 1000);
    }

    updateChatDisplay() {
        const messagesContainer = document.getElementById('chatbotMessages');
        messagesContainer.innerHTML = '';
        this.messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.style.display = 'flex';
            messageDiv.style.marginBottom = '10px';
            messageDiv.style.width = '100%';
            if (msg.type === 'bot') {
                messageDiv.style.justifyContent = 'flex-end';
                messageDiv.innerHTML = `
                    <div style="background: #23272f; color: #fff; border-radius: 18px 18px 4px 18px; box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10); padding: 10px 16px; max-width: 80%; font-size: 1rem; display: flex; align-items: flex-end; gap: 8px;">
                        <span style='font-size: 1.2rem; color: #22c55e;'><i class="fas fa-robot"></i></span>
                        <span style='white-space: pre-line;'>${msg.content}</span>
                    </div>
                `;
            } else {
                messageDiv.style.justifyContent = 'flex-start';
                messageDiv.innerHTML = `
                    <div style="background: #22c55e; color: #fff; border-radius: 18px 18px 18px 4px; box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10); padding: 10px 16px; max-width: 80%; font-size: 1rem; display: flex; align-items: flex-end; gap: 8px;">
                        <span style='white-space: pre-line;'>${msg.content}</span>
                    </div>
                `;
            }
            messagesContainer.appendChild(messageDiv);
        });
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Project information with enhanced details
        const projectInfo = {
            name: "New Code Development",
            services: [
                {
                    name: "تطوير المواقع",
                    details: "تصميم وتطوير مواقع احترافية متجاوبة مع جميع الأجهزة، مع التركيز على تجربة المستخدم والأداء العالي",
                    features: ["تصميم عصري", "تجربة مستخدم متميزة", "أداء عالي", "SEO محسن", "تكامل مع وسائل التواصل"]
                },
                {
                    name: "تطبيقات الهاتف",
                    details: "تطوير تطبيقات iOS و Android بأحدث التقنيات مع واجهة مستخدم سهلة وأداء عالي",
                    features: ["واجهة مستخدم سهلة", "أداء عالي", "دعم كامل للغات", "تكامل مع الخدمات السحابية"]
                },
                {
                    name: "أنظمة ERP",
                    details: "حلول متكاملة لإدارة موارد المؤسسة بكفاءة عالية",
                    features: ["إدارة الموارد البشرية", "إدارة المخزون والمبيعات", "إدارة الحسابات والمالية", "إدارة المشاريع", "التقارير والإحصائيات"]
                },
                {
                    name: "الأمن السيبراني",
                    details: "حماية بياناتك وأنظمتك من التهديدات السيبرانية المتزايدة",
                    features: ["تقييم الثغرات الأمنية", "حلول الحماية المتقدمة", "الاستجابة للحوادث الأمنية", "تدريب الموظفين"]
                },
                {
                    name: "التأمين الرقمي",
                    details: "حلول تأمينية مبتكرة لحماية أصولك الرقمية من المخاطر",
                    features: ["تأمين البيانات والخصوصية", "تأمين المعاملات الإلكترونية", "استشارات المخاطر الرقمية"]
                }
            ],
            contact: {
                phone: "+201065686528",
                email: "Newcodedevelopment@gmail.com",
                address: "القاهرة، مصر",
                workingHours: "9:00 صباحاً - 5:00 مساءً",
                socialMedia: {
                    facebook: "facebook.com/newcode",
                    twitter: "twitter.com/newcode",
                    linkedin: "linkedin.com/company/newcode"
                }
            }
        };

        // Enhanced response patterns with context awareness
        if (lowerMessage.includes('مرحبا') || lowerMessage.includes('اهلا')) {
            const timeOfDay = new Date().getHours();
            let greeting = "مرحباً";
            if (timeOfDay < 12) greeting += " صباح الخير";
            else if (timeOfDay < 17) greeting += " مساء الخير";
            else greeting += " مساءً";
            
            return `${greeting}! أنا مساعد New Code. كيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن خدماتنا، كيفية التواصل معنا، أو أي معلومات أخرى.`;
        }
        
        if (lowerMessage.includes('خدمات') || lowerMessage.includes('ماذا تقدم')) {
            const servicesList = projectInfo.services.map(service => 
                `- ${service.name}: ${service.details}`
            ).join('\n');
            return `نقدم مجموعة متكاملة من الخدمات الرقمية:\n${servicesList}\n\nهل ترغب في معرفة المزيد عن أي من هذه الخدمات؟`;
        }
        
        if (lowerMessage.includes('تواصل') || lowerMessage.includes('اتصل')) {
            return `يمكنك التواصل معنا عبر:\n\n- الهاتف: ${projectInfo.contact.phone}\n- البريد الإلكتروني: ${projectInfo.contact.email}\n- العنوان: ${projectInfo.contact.address}\n- ساعات العمل: ${projectInfo.contact.workingHours}\n\nوسائل التواصل الاجتماعي:\n- فيسبوك: ${projectInfo.contact.socialMedia.facebook}\n- تويتر: ${projectInfo.contact.socialMedia.twitter}\n- لينكد إن: ${projectInfo.contact.socialMedia.linkedin}\n\nهل ترغب في تحديد موعد للتواصل؟`;
        }

        // Service-specific responses
        for (const service of projectInfo.services) {
            if (lowerMessage.includes(service.name.toLowerCase())) {
                this.context.lastService = service.name;
                return `نقدم خدمة ${service.name}:\n${service.details}\n\nالمميزات الرئيسية:\n${service.features.map(f => `- ${f}`).join('\n')}\n\nهل ترغب في معرفة المزيد عن هذه الخدمة أو كيفية البدء؟`;
            }
        }
        
        if (lowerMessage.includes('erp') || lowerMessage.includes('نظام') || lowerMessage.includes('ادارة')) {
            const erpService = projectInfo.services.find(s => s.name === "أنظمة ERP");
            return `نقدم حلول أنظمة ERP متكاملة تشمل:\n${erpService.features.map(f => `- ${f}`).join('\n')}\n\nهل ترغب في معرفة المزيد عن كيفية تنفيذ نظام ERP في مؤسستك؟`;
        }
        
        if (lowerMessage.includes('امن') || lowerMessage.includes('حماية')) {
            const securityService = projectInfo.services.find(s => s.name === "الأمن السيبراني");
            return `نقدم حلول الأمن السيبراني المتكاملة:\n${securityService.features.map(f => `- ${f}`).join('\n')}\n\nهل ترغب في معرفة المزيد عن كيفية حماية بياناتك وأنظمتك؟`;
        }

        if (lowerMessage.includes('سعر') || lowerMessage.includes('تكلفة') || lowerMessage.includes('الاسعار')) {
            return "تختلف الأسعار حسب متطلبات المشروع وحجمه. يمكنني مساعدتك في تحديد احتياجاتك وتقديم عرض سعر مناسب. هل ترغب في تحديد موعد للتواصل مع فريق المبيعات؟";
        }

        if (lowerMessage.includes('موعد') || lowerMessage.includes('مقابلة')) {
            return "يمكننا ترتيب موعد للتواصل معك. يرجى تحديد:\n1- الوقت المناسب لك\n2- وسيلة التواصل المفضلة\n3- الغرض من المقابلة\nوسيقوم فريقنا بالتواصل معك في أقرب وقت.";
        }

        // Context-aware responses
        if (this.context.lastService && lowerMessage.includes('كيف') || lowerMessage.includes('طريقة')) {
            return `للبدء في خدمة ${this.context.lastService}، يمكننا:\n1- تحديد متطلباتك واحتياجاتك\n2- تقديم خطة عمل مفصلة\n3- البدء في التنفيذ\n4- المتابعة والدعم المستمر\n\nهل ترغب في البدء الآن؟`;
        }

        // Default response with suggestions
        return "عذراً، لم أفهم سؤالك بشكل كامل. هل يمكنك إعادة صياغته بطريقة أخرى؟ أو يمكنك اختيار من المواضيع التالية:\n- خدماتنا\n- كيفية التواصل معنا\n- الأسعار والعروض\n- مواعيد المقابلات\n- معلومات عن الشركة";
    }
}

// Initialize chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
}); 