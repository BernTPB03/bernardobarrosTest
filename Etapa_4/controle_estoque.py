
estoque = {}

def adicionar_item(nome, quantidade):
    if nome in estoque:
        estoque[nome] += quantidade
    else:
        estoque[nome] = quantidade
    print(f"Adicionado {quantidade} de {nome} ao estoque.")

def remover_item(nome, quantidade):
    if nome in estoque and estoque[nome] >= quantidade:
        estoque[nome] -= quantidade
        print(f"Removido {quantidade} de {nome} do estoque.")
        if estoque[nome] == 0:
            del estoque[nome]
            print(f"{nome} removido do estoque, pois a quantidade é 0.")
    else:
        print(f"Quantidade insuficiente de {nome} no estoque ou item não existe.")

def atualizar_item(nome, quantidade):
    if nome in estoque:
        estoque[nome] = quantidade
        print(f"Quantidade de {nome} atualizada para {quantidade}.")
    else:
        print(f"Item {nome} não encontrado no estoque.")

def exibir_estoque():
    if not estoque:
        print("Estoque vazio.")
    else:
        print("Estoque atual:")
        for nome, quantidade in estoque.items():
            print(f"{nome}: {quantidade}")

def main():
    while True:
        print("\nMenu:")
        print("1. Adicionar item")
        print("2. Remover item")
        print("3. Atualizar item")
        print("4. Exibir estoque")
        print("5. Sair")
        escolha = input("Escolha uma opção: ")

        if escolha == "1":
            nome = input("Digite o nome do item: ")
            quantidade = int(input("Digite a quantidade a ser adicionada: "))
            adicionar_item(nome, quantidade)
        elif escolha == "2":
            nome = input("Digite o nome do item: ")
            quantidade = int(input("Digite a quantidade a ser removida: "))
            remover_item(nome, quantidade)
        elif escolha == "3":
            nome = input("Digite o nome do item: ")
            quantidade = int(input("Digite a nova quantidade: "))
            atualizar_item(nome, quantidade)
        elif escolha == "4":
            exibir_estoque()
        elif escolha == "5":
            print("Saindo do programa.")
            break
        else:
            print("Opção inválida. Tente novamente.")

if __name__ == "__main__":
    main()
